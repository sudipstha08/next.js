### Blob 

- Binary Large Object
- A BLOB (binary large object) is a varying-length binary string that can be up to 2,147,483,647 characters long.  In addition, BLOB strings do not hold character data.
- A blob is a collection of binary data((i.e. data which can contain non-printable characters as well as arbitrary bit patterns)) stored as a single entity. Blobs are typically images, audio or other multimedia objects,
- Binary Large Objects (BLOBs) can be complex files like images or videos, unlike other data strings that only store letters and numbers. A BLOB will hold multimedia objects to add to a database
- Common examples of files stored in a BLOB data type field include:

Images (JPG, JPEG, PNG, GIF, HEIC, WEBP, raw binary data)
Videos (MP4, AVI, MOV, MKV)
Audio files (MP3, WAV, AAC)
Documents (PDF, TXT, CSV, DOCX, XLSX)
Archives (ZIP, RAR)
Executable files (EXE, MSI)
Backups (SQL, BAK)

- Blob is stored in memory. In browser blob storage. If you create a blob object, you can check it at Firefox memory profiler(about:memory). An example of firefox output, here we can see, selected files. There is a difference between Blob and File. Blob stores at the memory, File stores at filesystem.


[REFERENCES]
- https://developer.mozilla.org/en-US/docs/Web/API/Blob
- https://www.dbvis.com/thetable/blob-data-type-everything-you-can-do-with-it/
- https://www.w3.org/TR/FileAPI/