// export const NavStructure = {
//   Organization: [
//     { text: 'My Profile', expectedUrl: 'https://hrms.test.intimetec.americas/user/organization/my-profile' },
//     { text: 'Employee Directory', expectedUrl: 'https://hrms.test.intimetec.americas/user/organization/employee-directory' }
//   ],
//   'Leave & Attendance': [
//     { text: 'Attendance record', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/attendance-record' },
//     { text: 'Leaves Application', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leaves-application' },
//     { text: 'Leave Entitlements', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leave-entitlements?tab=myEntitlementRequests' },
//     { text: 'Leave Correction', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leave-correction' },
//     { text: 'My Holidays', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/my-holidays' }
//   ]
// };


// import { PageUrls } from "./pageURLs";

// export const NavStructure = {
//   Organization: [
//     { text: 'My Profile', expectedUrl: PageUrls.MY_PROFILE },
//     { text: 'Employee Directory', expectedUrl: PageUrls.EMPLOYEE_DIRECTORY },
//   ],
//   'Leave & Attendance': [
//     { text: 'Attendance record', expectedUrl: PageUrls.ATTENDANCE_RECORD },
//     { text: 'Leaves Application', expectedUrl: PageUrls.LEAVES_APPLICATION },
//     { text: 'Leave Entitlements', expectedUrl: PageUrls.LEAVE_ENTITLEMENTS },
//     { text: 'Leave Correction', expectedUrl: PageUrls.LEAVE_CORRECTION },
//     { text: 'My Holidays', expectedUrl: PageUrls.MY_HOLIDAYS },
//   ],
// };


import { PageUrls } from './pageURLs';
import { NavStructureType } from './types';

export const NavStructure: NavStructureType = {
  Organization: [
    { text: 'My Profile', expectedUrl: PageUrls.MY_PROFILE },
    { text: 'Employee Directory', expectedUrl: PageUrls.EMPLOYEE_DIRECTORY },
  ],
  'Leave & Attendance': [
    { text: 'Attendance record', expectedUrl: PageUrls.ATTENDANCE_RECORD },
    { text: 'Leaves Application', expectedUrl: PageUrls.LEAVES_APPLICATION },
    { text: 'Leave Entitlements', expectedUrl: PageUrls.LEAVE_ENTITLEMENTS },
    { text: 'Leave Correction', expectedUrl: PageUrls.LEAVE_CORRECTION },
    { text: 'My Holidays', expectedUrl: PageUrls.MY_HOLIDAYS },
  ],
};
