const mockData = [
  { name: 'Brandon', tenats: ['cme', 'lme', 'tmx'], requestApplied: 10, requestApproved: 0 },
  { name: 'Bin', tenats: ['cme', 'lme', 'tmx'], requestApplied: 20, requestApproved: 5 },
  { name: 'Mark', tenats: ['cme', 'tmx'], requestApplied: 30, requestApproved: 8 },
  { name: 'Tim', tenats: ['Dtcc', 'lme', 'tmx'], requestApplied: 30, requestApproved: 8 },
  { name: 'Josh', tenats: ['JSE', 'Demo'], requestApplied: 30, requestApproved: 8 },
  { name: 'Shan', tenats: ['Lseg', 'lme', 'tmx'], requestApplied: 30, requestApproved: 8 },
  { name: 'Kar', tenats: ['cme', 'lme'], requestApplied: 30, requestApproved: 8 }
];

export const fetchLicenses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500); // Simulate network delay
  });
};

export const createLicense = async (license: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockData.push(license);
      resolve(license);
    }, 500); // Simulate network delay
  });
};