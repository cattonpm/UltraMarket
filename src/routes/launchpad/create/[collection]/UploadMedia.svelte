<script>
  import Papa from 'papaparse';

  export let uploadData = {
    itemsUploaded: 0,
    metadataUploaded: 0,
    allowlistUploaded: 0,
    parsedMetadata: null
  };

  export let uploadLoading = false;
  export let uploadSuccess = false;
  export let uploadError = false;
  export let uploadErrorValue = '';
  export let onSave = () => {};

  let metadataError = false;
  let metadataErrorValue = '';
  let allowlistError = false;
  let allowlistErrorValue = '';
  let imageError = false;
  let imageErrorValue = '';

  function handleFileUpload(type) {
    if (type === 'items') {
      // Create file input for folder selection
      const input = document.createElement('input');
      input.type = 'file';
      input.webkitdirectory = true;
      input.onchange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
          uploadImageToFront(files);
        }
      };
      input.click();}
    else if (type === 'metadata') {
      // Create file input for CSV
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.csv';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          uploadCSVMetadataToFront(file);
        }
      };
      input.click();
    } else if (type === 'allowlist') {
      // Create file input for allowlist CSV
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.csv';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          uploadCSVAllowlistToFront(file);
        }
      };
      input.click();
    } else {
      // Placeholder file upload logic for other types
    }
  }


  function uploadCSVMetadataToFront(metadata_csv) {
    metadataError = false;
    metadataErrorValue = '';

    if (!metadata_csv) {
      metadataError = true;
      metadataErrorValue = 'Please select a CSV file';
      return;
    }

    if (!metadata_csv.name.toLowerCase().endsWith('.csv')) {
      metadataError = true;
      metadataErrorValue = 'Please upload a CSV file';
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const csv = e.target.result;
        const lines = csv.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length < 2) {
          metadataError = true;
          metadataErrorValue = 'CSV file must have at least a header and one data row';
          return;
        }

        // Parse header
        const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
        
        // Check required columns (only name and description)
        const requiredColumns = ['name', 'description'];
        for (const required of requiredColumns) {
          if (!headers.includes(required)) {
            metadataError = true;
            metadataErrorValue = `Missing required column: ${required}`;
            return;
          }
        }

        const jsonMetadata = [];


        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',').map(val => val.trim().replace(/"/g, ''));
          
          if (values.length < headers.length) continue; 

          const row = {};
          headers.forEach((header, index) => {
            row[header] = values[index] || '';
          });


          for (const required of requiredColumns) {
            if (!row[required] || row[required].trim() === '') {
              metadataError = true;
              metadataErrorValue = `Row ${i}: ${required} cannot be blank`;
              return;
            }
          }

          // Build metadata object
          const metadata = {
            description: row.description.trim(),
            external_url: row.external_url ? row.external_url.trim() : "", // Optional, default to empty
            name: row.name.trim(),
            attributes: []
          };

          // Add attributes from remaining columns
          headers.forEach(header => {
            if (!['name', 'description', 'external_url'].includes(header) && row[header] && row[header].trim() !== '') {
              metadata.attributes.push({
                trait_type: header,
                value: row[header].trim()
              });
            }
          });

          jsonMetadata.push(metadata);
        }

        uploadData.parsedMetadata = jsonMetadata;
        uploadData.metadataUploaded = jsonMetadata.length;

      } catch (error) {
        metadataError = true;
        metadataErrorValue = 'Error processing CSV: ' + error.message;
      }
    };

    reader.readAsText(metadata_csv);
  }

  function uploadCSVAllowlistToFront(allowlist_csv) {
    allowlistError = false;
    allowlistErrorValue = '';

    if (!allowlist_csv) {
      allowlistError = true;
      allowlistErrorValue = 'Please select a CSV file';
      return;
    }

    if (!allowlist_csv.name.toLowerCase().endsWith('.csv')) {
      allowlistError = true;
      allowlistErrorValue = 'Please upload a CSV file';
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const csv = e.target.result;
        const lines = csv.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length < 2) {
          allowlistError = true;
          allowlistErrorValue = 'CSV file must have at least a header and one data row';
          return;
        }

        const allowlistArray = [];

        // Process data rows (skip header)
        for (let i = 1; i < lines.length; i++) {
          const address = lines[i].split(',')[0].trim().replace(/"/g, '');
          
          if (!address || address === '') {
            allowlistError = true;
            allowlistErrorValue = `Row ${i}: Address cannot be blank`;
            return;
          }

          // Basic Ethereum address validation (0x + 40 hex characters)
          if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            allowlistError = true;
            allowlistErrorValue = `Row ${i}: Invalid Ethereum address format`;
            return;
          }

          allowlistArray.push(address);
        }

        // Store in parent component
        uploadData.parsedAllowlist = allowlistArray;
        uploadData.allowlistUploaded = allowlistArray.length;

        console.log('Successfully parsed allowlist:', allowlistArray);

      } catch (error) {
        allowlistError = true;
        allowlistErrorValue = 'Error processing CSV: ' + error.message;
      }
    };

    reader.readAsText(allowlist_csv);
  }

  function uploadImageToFront(image_folder) {
    imageError = false;
    imageErrorValue = '';

    if (!image_folder || image_folder.length === 0) {
      imageError = true;
      imageErrorValue = 'Please select a folder with images';
      return;
    }

    try {
      // Filter only .png files
      const pngFiles = Array.from(image_folder).filter(file => 
        file.name.toLowerCase().endsWith('.png')
      );

      if (pngFiles.length === 0) {
        imageError = true;
        imageErrorValue = 'No PNG files found in the selected folder';
        return;
      }

      // Check total size (60MB = 60 * 1024 * 1024 bytes)
      const totalSize = pngFiles.reduce((sum, file) => sum + file.size, 0);
      const maxSize = 60 * 1024 * 1024; // 60MB

      if (totalSize > maxSize) {
        imageError = true;
        imageErrorValue = `Folder size too large: ${(totalSize / (1024 * 1024)).toFixed(2)}MB (max 60MB)`;
        return;
      }

      // Extract numbers from filenames and sort
      const fileMap = new Map();
      for (const file of pngFiles) {
        const match = file.name.match(/^(\d+)\.png$/);
        if (!match) {
          imageError = true;
          imageErrorValue = `Invalid filename format: ${file.name}. Expected format: number.png (e.g., 1.png)`;
          return;
        }
        
        const number = parseInt(match[1]);
        if (fileMap.has(number)) {
          imageError = true;
          imageErrorValue = `Duplicate filename: ${file.name}`;
          return;
        }
        
        fileMap.set(number, file);
      }

      // Check sequence from 1 to n with no gaps
      const numbers = Array.from(fileMap.keys()).sort((a, b) => a - b);
      
      if (numbers[0] !== 1) {
        imageError = true;
        imageErrorValue = 'Image sequence must start from 1.png';
        return;
      }

      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== i + 1) {
          imageError = true;
          imageErrorValue = `Missing image: ${i + 1}.png. Sequence must be continuous from 1 to ${numbers.length}`;
          return;
        }
      }

      // Create sorted array of File objects
      const sortedImages = [];
      for (let i = 1; i <= numbers.length; i++) {
        sortedImages.push(fileMap.get(i));
      }

      // Store in parent component
      uploadData.parsedImages = sortedImages;
      uploadData.itemsUploaded = sortedImages.length;


      } catch (error) {
        imageError = true;
        imageErrorValue = 'Error processing images: ' + error.message;
      }
  }
  
</script>

<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-8 text-center">Upload media & metadata</h1>
    
    <div class="space-y-8">
      <!-- Items Upload -->
      <div class="border p-4 rounded-md border-darkGray shadow-md">
        <h2 class="text-white text-xl font-semibold mb-4">Upload image folder</h2>
        <a href="https://drive.google.com/drive/folders/1uuP4_XuRCoz1hKyI8us2NaQhA1oKEPfX?usp=sharing" target="_none" class="text-button hover:text-buttonHover text-sm underline mb-4 block">
          Download example folder
        </a>
        
        <div class="flex gap-6">
          <button 
            on:click={() => handleFileUpload('items')}
            class="w-32 h-24 bg-lightGray border-2 border-dashed border-darkGray rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span class="text-darkGray text-2xl">+</span>
          </button>
          
          <div class="flex-1">
            <p class="text-lightGray text-sm">Uploaded {uploadData.itemsUploaded} items</p>
            <p class="text-lightGray text-sm">Size: {uploadData.parsedImages ? (uploadData.parsedImages.reduce((sum, file) => sum + file.size, 0) / (1024 * 1024)).toFixed(2) + 'MB' : ''}</p>
            {#if uploadData.parsedImages}
              <p class="text-green text-sm">✓ Images uploaded successfully</p>
            {/if}
          </div>
        </div>

        <!-- Error Display for Images -->
        {#if imageError}
          <div class="mt-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
            <p class="text-red-400 text-sm">{imageErrorValue}</p>
          </div>
        {/if}
      </div>

      <!-- Metadata Upload -->
      <div class="border p-4 rounded-md border-darkGray shadow-md">
        <h2 class="text-white text-xl font-semibold mb-4">Metadata upload</h2>
        <a href="https://drive.google.com/file/d/1PyEfCjwWU0OoGKvGeMrpZHxyGeICQYLB/view?usp=sharing" target="_none" class="text-button hover:text-buttonHover text-sm underline mb-4 block">Download example</a>
        
        <div class="flex gap-6">
          <button 
            on:click={() => handleFileUpload('metadata')}
            class="w-32 h-24 bg-lightGray border-2 border-dashed border-darkGray rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span class="text-darkGray text-2xl">+</span>
          </button>
          
          <div class="flex-1">
            <p class="text-lightGray text-sm">Uploaded {uploadData.metadataUploaded} items</p>
            {#if uploadData.parsedMetadata}
              <p class="text-green text-sm">✓ Metadata parsed successfully</p>
            {/if}
          </div>
        </div>

        <!-- Error Display for Metadata -->
        {#if metadataError}
          <div class="mt-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
            <p class="text-red-400 text-sm">{metadataErrorValue}</p>
          </div>
        {/if}
      </div>

      <!-- Allowlist -->
      <div class="border p-4 rounded-md border-darkGray shadow-md">
        <h2 class="text-white text-xl font-semibold mb-4">Allowlist</h2>
        <a href="https://drive.google.com/file/d/1RmASm_Rseq_9dX_LGoXqkcwvbaduITob/view?usp=sharing" target="_none" class="text-button hover:text-buttonHover text-sm underline mb-4 block">Download example</a>
        
        <div class="flex gap-6">
          <button 
            on:click={() => handleFileUpload('allowlist')}
            class="w-32 h-24 bg-lightGray border-2 border-dashed border-darkGray rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span class="text-darkGray text-2xl">+</span>
          </button>
          
          <div class="flex-1">
            <p class="text-lightGray text-sm">Uploaded {uploadData.allowlistUploaded} items</p>
            {#if uploadData.parsedAllowlist}
              <p class="text-green text-sm">✓ Allowlist parsed successfully</p>
            {/if}
          </div>
        </div>
      </div>


      {#if allowlistError}
        <div class="mt-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
          <p class="text-red-400 text-sm">{allowlistErrorValue}</p>
        </div>
      {/if}

      {#if uploadSuccess && uploadError}
        <!-- Both success and error -->
        <div class="mb-4 space-y-3">
          <div class="p-3 bg-green-600 bg-opacity-20 border border-green-600 rounded-lg">
            <p class="text-green-400 text-sm">✓ Metadata and images uploaded successfully!</p>
          </div>
          <div class="p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
            <p class="text-red-400 text-sm">{uploadErrorValue}</p>
          </div>
        </div>
      {:else if uploadSuccess}
        <!-- Only success -->
        <div class="mb-4 p-3 bg-green-600 bg-opacity-20 border border-green-600 rounded-lg">
          <p class="text-green-400 text-sm">✓ Metadata and images uploaded successfully!</p>
        </div>
      {:else if uploadError}
        <!-- Only error -->
        <div class="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
          <p class="text-red-400 text-sm">{uploadErrorValue}</p>
        </div>
      {/if}
          
    </div>

    {#if uploadError}
      <div class="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
        <p class="text-red-400 text-sm">{uploadErrorValue}</p>
      </div>
    {/if}

    <!-- Save Button -->
    <div class="flex justify-end mt-12">
      <button 
        on:click={onSave}
        disabled={uploadLoading}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
      >
        {#if uploadLoading}
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Uploading...
        {:else}
          Save
        {/if}
      </button>
    </div>
  </div>
</div>