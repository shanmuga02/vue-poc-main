const mockNotifications = [
    "Lorem Ipsum has been the industry's standard,",
    "Lorem Ipsum has been the industry's standard,",
    "Lorem Ipsum has been the industry's standard,",
    "Lorem Ipsum has been the industry's standard,",
    "Lorem Ipsum has been the industry's standard,",
    "Lorem Ipsum has been the industry's standard,"
  ];
  
  export const fetchNotifications = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNotifications);
      }, 500); // Simulate network delay
    });
  };