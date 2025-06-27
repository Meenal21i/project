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
