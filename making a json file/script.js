fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // اینجا می‌تونی ازش استفاده کنی
    data.forEach(data => {
      console.log(data.name);
    });
  })
  .catch(error => console.error('خطا در خوندن فایل:', error));