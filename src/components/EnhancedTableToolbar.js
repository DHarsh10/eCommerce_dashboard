import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { search, searchDark } from "../utils/assets/svgs";
import useTheme from "../contexts/themeContext";

function EnhancedTableToolbar() {
  const {theme} = useTheme();
  const searchSrc = theme === 'light' ? search : searchDark
  return (
    <div className="flex items-center justify-between table-toolbar">
        <Toolbar sx={{ gap: "0.5rem" }}>
      <Tooltip title="add">
        <IconButton>
          <SvgIcon>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.625 1.375C7.625 1.02982 7.34518 0.75 7 0.75C6.65482 0.75 6.375 1.02982 6.375 1.375V6.375H1.375C1.02982 6.375 0.75 6.65482 0.75 7C0.75 7.34518 1.02982 7.625 1.375 7.625H6.375V12.625C6.375 12.9702 6.65482 13.25 7 13.25C7.34518 13.25 7.625 12.9702 7.625 12.625V7.625H12.625C12.9702 7.625 13.25 7.34518 13.25 7C13.25 6.65482 12.9702 6.375 12.625 6.375H7.625V1.375Z"
                fill="#1C1C1C"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Tooltip title="filter">
        <IconButton>
          <SvgIcon>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.625 5C14.625 5.16576 14.5592 5.32473 14.4419 5.44194C14.3247 5.55915 14.1658 5.625 14 5.625H4C3.83424 5.625 3.67527 5.55915 3.55806 5.44194C3.44085 5.32473 3.375 5.16576 3.375 5C3.375 4.83424 3.44085 4.67527 3.55806 4.55806C3.67527 4.44085 3.83424 4.375 4 4.375H14C14.1658 4.375 14.3247 4.44085 14.4419 4.55806C14.5592 4.67527 14.625 4.83424 14.625 5ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.690848 0.433058 0.808058C0.315848 0.925269 0.25 1.08424 0.25 1.25C0.25 1.41576 0.315848 1.57473 0.433058 1.69194C0.550268 1.80915 0.70924 1.875 0.875 1.875H17.125C17.2908 1.875 17.4497 1.80915 17.5669 1.69194C17.6842 1.57473 17.75 1.41576 17.75 1.25C17.75 1.08424 17.6842 0.925269 17.5669 0.808058C17.4497 0.690848 17.2908 0.625 17.125 0.625ZM10.875 8.125H7.125C6.95924 8.125 6.80027 8.19085 6.68306 8.30806C6.56585 8.42527 6.5 8.58424 6.5 8.75C6.5 8.91576 6.56585 9.07473 6.68306 9.19194C6.80027 9.30915 6.95924 9.375 7.125 9.375H10.875C11.0408 9.375 11.1997 9.30915 11.3169 9.19194C11.4342 9.07473 11.5 8.91576 11.5 8.75C11.5 8.58424 11.4342 8.42527 11.3169 8.30806C11.1997 8.19085 11.0408 8.125 10.875 8.125Z"
                fill="#1C1C1C"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Tooltip title="sort">
        <IconButton>
          <SvgIcon>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19194 10.3081C1.07473 10.1908 0.91576 10.125 0.75 10.125C0.58424 10.125 0.425268 10.1908 0.308058 10.3081C0.190848 10.4253 0.125 10.5842 0.125 10.75C0.125 10.9158 0.190848 11.0747 0.308058 11.1919L2.80806 13.6919C2.92527 13.8092 3.08424 13.875 3.25 13.875C3.41576 13.875 3.57473 13.8092 3.69194 13.6919L6.19171 11.1922C6.30892 11.075 6.375 10.9158 6.375 10.75C6.375 10.5842 6.30915 10.4253 6.19194 10.3081C6.07473 10.1908 5.91576 10.125 5.75 10.125C5.58424 10.125 5.42527 10.1908 5.30806 10.3081L3.25 12.3661L1.19194 10.3081Z"
                fill="#1C1C1C"
              />
              <path
                d="M2.625 0.75V13.25C2.625 13.5952 2.90482 13.875 3.25 13.875C3.59518 13.875 3.875 13.5952 3.875 13.25V0.75C3.875 0.404822 3.59518 0.125 3.25 0.125C2.90482 0.125 2.625 0.404822 2.625 0.75Z"
                fill="#1C1C1C"
              />
              <path
                d="M12.8077 3.69162C12.9249 3.80883 13.0842 3.875 13.25 3.875C13.4158 3.875 13.5747 3.80915 13.6919 3.69194C13.8092 3.57473 13.875 3.41576 13.875 3.25C13.875 3.08424 13.8092 2.92527 13.6919 2.80806L11.1919 0.308058C11.0747 0.190848 10.9158 0.125 10.75 0.125C10.5842 0.125 10.4253 0.190848 10.3081 0.308058L7.80806 2.80806C7.69085 2.92527 7.625 3.08424 7.625 3.25C7.625 3.26001 7.62524 3.27002 7.62572 3.28002C7.63318 3.43522 7.69819 3.58207 7.80806 3.69194C7.92527 3.80915 8.08424 3.875 8.25 3.875C8.41576 3.875 8.57473 3.80915 8.69194 3.69194L10.75 1.63388L12.8077 3.69162Z"
                fill="#1C1C1C"
              />
              <path
                d="M11.375 13.25V0.75C11.375 0.404822 11.0952 0.125 10.75 0.125C10.4048 0.125 10.125 0.404822 10.125 0.75V13.25C10.125 13.5952 10.4048 13.875 10.75 13.875C11.0952 13.875 11.375 13.5952 11.375 13.25Z"
                fill="#1C1C1C"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </Toolbar>
    <div className='me-4 flex navInput'>
        <img src={searchSrc} alt="" className='ps-2'/>
        <input type="text" className='text-sm px-2 ' placeholder='Search'/>
    </div>
    </div>
  );
}

export default EnhancedTableToolbar;
