    const fs = require('fs');

    // 1. Create a Buffer from a string
    const bufferFromString = Buffer.from('Hello, World!', 'utf8');
    console.log('Buffer from string:', bufferFromString);
    console.log('String from buffer:', bufferFromString.toString()); // Convert buffer to string

    // 2. Allocate a buffer of a specific size and write to it
    const bufferAllocated = Buffer.alloc(20);
    bufferAllocated.write('Node.js is awesome!', 0, 'utf8');
    console.log('Allocated Buffer:', bufferAllocated);
    console.log('String from allocated buffer:', bufferAllocated.toString('utf8', 0, 18)); // Get the written content

    // 3. Concatenate two Buffers
    const buffer1 = Buffer.from('Hello ');
    const buffer2 = Buffer.from('World!');
    const bufferConcat = Buffer.concat([buffer1, buffer2]);
    console.log('Concatenated Buffer:', bufferConcat.toString()); // Prints 'Hello World!'

    // 4. Copy from one Buffer to another
    const sourceBuffer = Buffer.from('Copy this data');
    const targetBuffer = Buffer.alloc(15); // Allocate an empty buffer of 15 bytes
    sourceBuffer.copy(targetBuffer, 0, 0, 15);
    console.log('Copied Buffer content:', targetBuffer.toString());

    // 5. Read a file into a buffer and print the contents
    fs.readFile('example.txt', (err, data) => {
        if (err) throw err;
        console.log('File Buffer:', data); // This is a buffer containing the file's content
        console.log('File content:', data.toString()); // Convert buffer to string
    });

    // 6. Using a buffer with a readable stream
    const readStream = fs.createReadStream('example.txt');

    readStream.on('data', (chunk) => {
        console.log('Received chunk (buffer):', chunk); // Each chunk is a buffer
        console.log('Chunk as string:', chunk.toString()); // Convert each chunk to a string
    });

    readStream.on('end', () => {
        console.log('Finished reading file');
    });