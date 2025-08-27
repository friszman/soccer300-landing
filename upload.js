function testUploadToVercel() {
  const url = 'https://soccer300.com/api/upload'; // or your .vercel.app test domain
  const sampleBase64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA' +
                            'AAAFCAYAAACNbyblAAAAHElEQVQI12P4' +
                            '//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  const payload = JSON.stringify({
    name: `test-${Date.now()}.png`,
    image: sampleBase64Image
  });

  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload,
    muteHttpExceptions: true,
  };

  const response = UrlFetchApp.fetch(url, options);
  Logger.log("Upload response: " + response.getContentText());
}
