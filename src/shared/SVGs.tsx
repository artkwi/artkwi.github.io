import React from 'react';
import theme from './theme';

interface IProps {
    fill?: string;
}

export const PLFlag:React.FunctionComponent<IProps> = () => (
  <svg viewBox="0 0 512 512" width="1em" height="1em">
    <g fill="#f0f0f0">
      <path d="M0 85.337h512v341.326H0z" />
      <path d="M0 85.337h512V256H0z" />
    </g>
    <path fill="#d80027" d="M0 256h512v170.663H0z" />
  </svg>
);

export const ENFlag:React.FunctionComponent<IProps> = () => (
  <svg viewBox="0 0 512 512" width="1em" height="1em">
    <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
    <path
      fill="#d80027"
      d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
    />
    <g fill="#0052b4">
      <path d="M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z" />
    </g>
    <path
      fill="#f0f0f0"
      d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
    />
    <path
      fill="#d80027"
      d="M311.652 315.358L512 426.662v-31.474l-143.693-79.83z"
    />
    <g fill="#0052b4">
      <path d="M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z" />
    </g>
    <path
      fill="#d80027"
      d="M143.693 315.358L0 395.188v31.474l200.348-111.304z"
    />
    <g fill="#0052b4">
      <path d="M118.215 196.634L0 130.958v65.676zM200.348 196.634L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z" />
    </g>
    <path fill="#f0f0f0" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
    <path fill="#d80027" d="M200.348 196.634L0 85.33v31.474l143.693 79.83z" />
    <g fill="#0052b4">
      <path d="M421.659 196.636L512 146.446v50.19zM311.652 182.482V85.331h174.857z" />
    </g>
    <path
      fill="#d80027"
      d="M368.307 196.634L512 116.804V85.33L311.652 196.634z"
    />
  </svg>
);

export const CV:React.FunctionComponent<IProps> = ({ fill = theme.colors.blue }) => (
  <svg viewBox="0 0 512 512"
    fill={fill}
    width="1em" height="1em">
    <path fill={fill} d="M196 90c-16.538 0-31 13.462-31 30s14.462 30 31 30 31-13.462 31-30-14.462-30-31-30zM85.605 13.184L13.184 85.605c-1.359 1.359-2.45 2.9-3.611 4.395H90V9.571c-1.494 1.161-3.036 2.254-4.395 3.613zM196 180c-41.353 0-76 35.647-76 77v15h152v-15c0-41.353-34.647-77-76-77z" />

    <path fill={fill} d="M377 0H120v105c0 8.291-6.709 15-15 15H0v347c0 8.291 6.709 15 15 15h279.853c-11.757-17.525-19.252-38.009-21.718-60H105c-8.291 0-15-6.709-15-15s6.709-15 15-15h168.419c1.174-10.4 3.272-20.471 6.693-30H105c-8.291 0-15-6.709-15-15s6.709-15 15-15h190.48c21.661-31.74 56.336-53.963 96.52-58.484V15c0-8.291-6.709-15-15-15zm-75 287c0 8.291-6.709 15-15 15H105c-8.291 0-15-6.709-15-15v-30c0-42.017 24.976-80.089 60.72-96.858C141.053 149.487 135 135.489 135 120c0-33.091 27.909-60 61-60s61 26.909 61 60c0 15.489-6.053 29.487-15.72 40.142C277.024 176.911 302 214.983 302 257v30z" />
    <path fill={fill} d="M407 302c-57.99 0-105 47.01-105 105s47.01 105 105 105 105-47.01 105-105-47.01-105-105-105zm55.605 85.605l-60 60A14.952 14.952 0 01392 452a14.95 14.95 0 01-10.605-4.395l-30-30c-5.859-5.859-5.859-15.352 0-21.211s15.352-5.859 21.211 0L392 415.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352-.001 21.211z" />
  </svg>
);

export const GitHub:React.FunctionComponent<IProps> = ({ fill = theme.colors.blue }) => (
  <svg
    fill={fill}
    width="1em" height="1em"
    viewBox="0 0 568.034 568.034"
  >
    <path d="M550.99 0H17.051C8.948 0 2.381 6.567 2.381 14.67v538.694c0 8.104 6.567 14.67 14.67 14.67h177.498v-.129c8.011-.092 14.149-4.577 14.431-12.166.728-19.725.214-39.492.214-58.562-14.296.667-27.944 2.473-41.438 1.695-29.762-1.714-52.632-14.413-64.493-43.556-7.026-17.265-17.613-32.032-34.101-41.886-3.079-1.842-5.771-4.554-8.127-7.308-3.079-3.592-2.503-7.282 2.362-8.268 4.908-.998 10.27-1.695 15.11-.79 19.009 3.568 32.154 15.49 42.216 31.347 19.896 31.371 50.521 40.974 84.976 26.487 1.921-.808 4.363-2.766 4.725-4.553 2.778-13.887 7.968-26.549 18.427-37.65-11.628-2.154-22.399-3.739-32.962-6.188-30.417-7.038-57.742-19.7-77.724-44.848-16.303-20.514-23.758-44.528-27.185-70.086-5.367-40.031-.563-77.503 26.928-109.493 1.389-1.616 2.142-4.927 1.524-6.94-6.885-22.497-5.833-44.805.991-67.051 3.581-11.683 4.578-12.265 16.5-10.637.729.098 1.438.281 2.161.404 23.898 3.954 44.468 15.526 64.731 27.95 2.724 1.671 6.873 2.711 9.866 1.983 48.397-11.744 96.702-11.695 145.093.043 2.809.679 6.561-.288 9.247-1.695 11.016-5.759 21.561-12.454 32.718-17.914 12.98-6.346 26.652-11.12 41.371-10.857 2.576.049 6.561 2.509 7.423 4.786 8.856 23.464 10.723 47.375 3.666 71.794-.753 2.607.367 6.322 1.769 8.892 6.965 12.779 16.689 24.572 21.096 38.127 13.434 41.316 8.538 82.229-9.749 121.06-16.757 35.594-47.834 53.63-84.621 62.933-12.424 3.14-25.153 5.049-38.556 7.681 17.564 18.348 20.318 40.74 20.006 64.192-.324 24.192-.238 48.391-.251 72.589-.006 11.72 5.11 18.195 14.039 18.574-.006.037 188.723.037 188.723.037V14.67C565.653 6.567 559.087 0 550.99 0z" />
  </svg>
)

export const LinkedIn:React.FunctionComponent<IProps> = ({ fill = theme.colors.blue }) => (
  <svg
    fill={fill}
    width="1em" height="1em"
    viewBox="0 0 430.117 430.117"
  >
    <path d="M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z" />
  </svg>
)

export const Mail:React.FunctionComponent<IProps> = ({ fill = theme.colors.blue }) => (
  <svg viewBox="0 0 512 512"
    fill={fill}
    width="1em" height="1em"
  >
    <path d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718zM505.813 127.406a10.618 10.618 0 00-11.375 1.542c-46.021 39.01-106.656 90.552-152.385 129.885a10.654 10.654 0 00-3.708 8.271 10.644 10.644 0 004 8.135c42.49 34.031 106.521 80.844 152.76 114.115a10.626 10.626 0 006.229 2.01c1.667 0 3.333-.385 4.865-1.177a10.66 10.66 0 005.802-9.49V137.083a10.663 10.663 0 00-6.188-9.677zM16.896 389.354c46.25-33.271 110.292-80.083 152.771-114.115a10.646 10.646 0 004-8.135 10.654 10.654 0 00-3.708-8.271C124.229 219.5 63.583 167.958 17.563 128.948a10.674 10.674 0 00-11.375-1.542A10.66 10.66 0 000 137.083v243.615c0 4 2.24 7.667 5.802 9.49a10.566 10.566 0 004.865 1.177 10.62 10.62 0 006.229-2.011z" />
    <path d="M498.927 418.375c-44.656-31.948-126.917-91.51-176.021-131.365-4-3.26-9.792-3.156-13.729.24-9.635 8.406-17.698 15.49-23.417 20.635-17.563 15.854-41.938 15.854-59.542-.021-5.698-5.135-13.76-12.24-23.396-20.615-3.906-3.417-9.708-3.521-13.719-.24-48.938 39.719-131.292 99.354-176.021 131.365a10.703 10.703 0 00-4.406 7.604 10.67 10.67 0 002.802 8.333C19.552 443.01 30.927 448 42.667 448h426.667c11.74 0 23.104-4.99 31.198-13.688a10.676 10.676 0 002.802-8.323 10.73 10.73 0 00-4.407-7.614z" />
  </svg>
)

export const skills:React.FunctionComponent<IProps> = () => (
  <svg width="1em" height="1em" viewBox="0 0 701 488" fill="none">
    <g clipPath="url(#prefix__clip0)">
      <path id="Vector" d="M176.548 262.36C184.249 262.36 190.492 256.126 190.492 248.436C190.492 240.746 184.249 234.512 176.548 234.512C168.847 234.512 162.605 240.746 162.605 248.436C162.605 256.126 168.847 262.36 176.548 262.36Z" fill="#F2F2F2"/>
      <path id="Vector_2" d="M128.83 417.416C133.603 417.416 137.471 413.553 137.471 408.787C137.471 404.021 133.603 400.158 128.83 400.158C124.058 400.158 120.189 404.021 120.189 408.787C120.189 413.553 124.058 417.416 128.83 417.416Z" fill="#F2F2F2"/>
      <path id="Vector_3" d="M393.862 16.262H287.821V17.7748H393.862V16.262Z" fill="#F2F2F2"/>
      <path id="Vector_4" d="M318.119 2.64728H316.604V16.6402H318.119V2.64728Z" fill="#F2F2F2"/>
      <path id="Vector_5" d="M364.322 2.64728H362.807V16.6402H364.322V2.64728Z" fill="#F2F2F2"/>
      <path id="Vector_6" d="M565.041 382.347H459.001V383.859H565.041V382.347Z" fill="#F2F2F2"/>
      <path id="Vector_7" d="M489.298 368.732H487.783V382.725H489.298V368.732Z" fill="#F2F2F2"/>
      <path id="Vector_8" d="M535.501 368.732H533.986V382.725H535.501V368.732Z" fill="#F2F2F2"/>
      <path id="Vector_9" d="M570.343 151.653H464.303V153.165H570.343V151.653Z" fill="#F2F2F2"/>
      <path id="Vector_10" d="M494.6 138.038H493.085V152.031H494.6V138.038Z" fill="#F2F2F2"/>
      <path id="Vector_11" d="M540.803 138.038H539.289V152.031H540.803V138.038Z" fill="#F2F2F2"/>
      <path id="Vector_12" d="M570.343 97.1939H464.303V98.7066H570.343V97.1939Z" fill="#F2F2F2"/>
      <path id="Vector_13" d="M494.6 83.5792H493.085V97.5721H494.6V83.5792Z" fill="#F2F2F2"/>
      <path id="Vector_14" d="M540.803 83.5792H539.289V97.5721H540.803V83.5792Z" fill="#F2F2F2"/>
      <path id="Vector_15" d="M337.812 104.758H231.772V106.27H337.812V104.758Z" fill="#F2F2F2"/>
      <path id="Vector_16" d="M262.069 91.1429H260.554V105.136H262.069V91.1429Z" fill="#F2F2F2"/>
      <path id="Vector_17" d="M308.272 91.1429H306.757V105.136H308.272V91.1429Z" fill="#F2F2F2"/>
      <path id="Vector_18" d="M260.554 69.2081H154.514V70.7209H260.554V69.2081Z" fill="#F2F2F2"/>
      <path id="Vector_19" d="M184.811 55.5934H183.296V69.5863H184.811V55.5934Z" fill="#F2F2F2"/>
      <path id="Vector_20" d="M231.014 55.5934H229.499V69.5863H231.014V55.5934Z" fill="#F2F2F2"/>
      <path id="Vector_21" d="M212.836 209.137H106.795V210.65H212.836V209.137Z" fill="#F2F2F2"/>
      <path id="Vector_22" d="M137.093 195.522H135.578V209.515H137.093V195.522Z" fill="#F2F2F2"/>
      <path id="Vector_23" d="M183.296 195.522H181.781V209.515H183.296V195.522Z" fill="#F2F2F2"/>
      <path id="Vector_24" d="M159.816 363.437H53.7753V364.95H159.816V363.437Z" fill="#F2F2F2"/>
      <path id="Vector_25" d="M84.0725 349.822H82.5576V363.815H84.0725V349.822Z" fill="#F2F2F2"/>
      <path id="Vector_26" d="M130.276 349.822H128.761V363.815H130.276V349.822Z" fill="#F2F2F2"/>
      <path id="Vector_27" d="M661.235 299.902H555.195V301.415H661.235V299.902Z" fill="#F2F2F2"/>
      <path id="Vector_28" d="M585.492 286.287H583.977V300.28H585.492V286.287Z" fill="#F2F2F2"/>
      <path id="Vector_29" d="M631.695 286.287H630.18V300.28H631.695V286.287Z" fill="#F2F2F2"/>
      <path id="Vector_30" d="M630.18 203.086H524.14V204.599H630.18V203.086Z" fill="#F2F2F2"/>
      <path id="Vector_31" d="M601.398 204.221H599.883V218.214H601.398V204.221Z" fill="#F2F2F2"/>
      <path id="Vector_32" d="M555.195 204.221H553.68V218.214H555.195V204.221Z" fill="#F2F2F2"/>
      <path id="Vector_33" d="M116.642 89.6302H10.6017V91.1429H116.642V89.6302Z" fill="#F2F2F2"/>
      <path id="Vector_34" d="M87.8597 90.7647H86.3448V104.758H87.8597V90.7647Z" fill="#F2F2F2"/>
      <path id="Vector_35" d="M41.6564 90.7647H40.1415V104.758H41.6564V90.7647Z" fill="#F2F2F2"/>
      <path id="Vector_36" d="M123.459 287.8H17.4186V289.313H123.459V287.8Z" fill="#F2F2F2"/>
      <path id="Vector_37" d="M94.6766 288.934H93.1617V302.927H94.6766V288.934Z" fill="#F2F2F2"/>
      <path id="Vector_38" d="M48.4733 288.934H46.9584V302.927H48.4733V288.934Z" fill="#F2F2F2"/>
      <path id="Vector_39" d="M457.486 40.4659H351.446V41.9787H457.486V40.4659Z" fill="#F2F2F2"/>
      <path id="Vector_40" d="M428.704 41.6005H427.189V55.5934H428.704V41.6005Z" fill="#F2F2F2"/>
      <path id="Vector_41" d="M382.5 41.6005H380.986V55.5934H382.5V41.6005Z" fill="#F2F2F2"/>
      <path id="Vector_42" d="M159.816 145.602H53.7753V147.115H159.816V145.602Z" fill="#F2F2F2"/>
      <path id="Vector_43" d="M84.0725 131.987H82.5576V145.98H84.0725V131.987Z" fill="#F2F2F2"/>
      <path id="Vector_44" d="M130.276 131.987H128.761V145.98H130.276V131.987Z" fill="#F2F2F2"/>
      <path id="Vector_45" d="M176.858 130.852V487.104H507.098V130.852H176.858ZM341.978 156.569C339.731 156.569 337.534 155.904 335.666 154.657C333.797 153.41 332.341 151.638 331.481 149.565C330.621 147.492 330.396 145.211 330.835 143.01C331.273 140.809 332.355 138.788 333.944 137.201C335.533 135.614 337.557 134.534 339.761 134.096C341.965 133.658 344.25 133.883 346.326 134.742C348.402 135.6 350.176 137.055 351.424 138.92C352.673 140.786 353.339 142.98 353.339 145.224C353.339 148.233 352.142 151.118 350.012 153.246C347.881 155.374 344.991 156.569 341.978 156.569V156.569Z" fill="#3F3D56"/>
      <path id="leaf2" d="M28.218 456.696C33.4549 476.027 51.3923 488 51.3923 488C51.3923 488 60.8392 468.63 55.6023 449.298C50.3654 429.967 32.428 417.994 32.428 417.994C32.428 417.994 22.9812 437.364 28.218 456.696Z" fill="#3F3D56"/>
      <path id="leaf1" d="M35.9133 452.541C50.2833 466.51 52.0385 487.984 52.0385 487.984C52.0385 487.984 30.4953 486.81 16.1252 472.84C1.75519 458.871 -3.8147e-06 437.398 -3.8147e-06 437.398C-3.8147e-06 437.398 21.5432 438.572 35.9133 452.541Z" fill="#6C63FF"/>
      <path id="Vector_46" d="M701 486.348H12.4953V487.86H701V486.348Z" fill="#3F3D56"/>
      <path id="Vector_47" d="M145.424 439.708C145.42 436.356 144.404 433.083 142.508 430.317C140.612 427.551 137.925 425.42 134.797 424.203C138.42 422.797 141.436 420.171 143.325 416.778C145.214 413.386 145.855 409.441 145.139 405.626C144.423 401.811 142.394 398.367 139.403 395.888C136.412 393.409 132.648 392.052 128.761 392.052C124.874 392.052 121.11 393.409 118.119 395.888C115.128 398.367 113.099 401.811 112.383 405.626C111.667 409.441 112.308 413.386 114.197 416.778C116.086 420.171 119.102 422.797 122.725 424.203C119.595 425.416 116.905 427.546 115.009 430.313C113.112 433.08 112.097 436.355 112.097 439.708C112.097 443.061 113.112 446.336 115.009 449.103C116.905 451.87 119.595 454 122.725 455.214C119.102 456.62 116.086 459.246 114.197 462.638C112.308 466.031 111.667 469.976 112.383 473.79C113.099 477.605 115.128 481.05 118.119 483.529C121.11 486.008 124.874 487.364 128.761 487.364C132.648 487.364 136.412 486.008 139.403 483.529C142.394 481.05 144.423 477.605 145.139 473.79C145.855 469.976 145.214 466.031 143.325 462.638C141.436 459.246 138.42 456.62 134.797 455.214C137.925 453.997 140.612 451.866 142.508 449.1C144.404 446.333 145.42 443.06 145.424 439.708V439.708ZM113.612 408.697C113.61 405.851 114.412 403.062 115.925 400.651C117.439 398.239 119.603 396.303 122.169 395.064C124.735 393.826 127.598 393.335 130.431 393.649C133.264 393.963 135.95 395.068 138.182 396.838C140.414 398.608 142.1 400.971 143.048 403.655C143.995 406.339 144.165 409.236 143.539 412.012C142.912 414.788 141.513 417.332 139.504 419.35C137.494 421.368 134.956 422.779 132.179 423.422C129.925 422.95 127.597 422.95 125.343 423.422C122.011 422.648 119.039 420.772 116.91 418.099C114.78 415.426 113.618 412.113 113.612 408.697V408.697ZM143.91 470.72C143.912 473.566 143.11 476.355 141.597 478.766C140.083 481.178 137.919 483.114 135.353 484.352C132.787 485.591 129.924 486.081 127.091 485.768C124.258 485.454 121.572 484.349 119.34 482.579C117.108 480.809 115.422 478.446 114.474 475.762C113.527 473.078 113.356 470.181 113.983 467.405C114.61 464.629 116.009 462.085 118.018 460.067C120.028 458.049 122.566 456.637 125.343 455.995C127.597 456.466 129.925 456.466 132.179 455.995C135.511 456.769 138.483 458.644 140.612 461.317C142.742 463.99 143.904 467.304 143.91 470.72V470.72ZM132.179 454.433C129.925 453.962 127.597 453.962 125.343 454.433C122.008 453.665 119.033 451.79 116.903 449.116C114.772 446.442 113.612 443.126 113.612 439.708C113.612 436.291 114.772 432.975 116.903 430.3C119.033 427.626 122.008 425.752 125.343 424.984C127.597 425.455 129.925 425.455 132.179 424.984C135.514 425.752 138.489 427.626 140.619 430.3C142.75 432.975 143.91 436.291 143.91 439.708C143.91 443.126 142.75 446.442 140.619 449.116C138.489 451.79 135.514 453.665 132.179 454.433V454.433Z" fill="#3F3D56"/>
      <path id="Vector_48" d="M387.045 205.355H213.593C212.187 205.355 210.838 204.797 209.844 203.804C208.85 202.812 208.291 201.465 208.291 200.061C208.291 198.656 208.85 197.31 209.844 196.317C210.838 195.324 212.187 194.766 213.593 194.766H387.045C388.451 194.766 389.8 195.324 390.794 196.317C391.788 197.31 392.347 198.656 392.347 200.061C392.347 201.465 391.788 202.812 390.794 203.804C389.8 204.797 388.451 205.355 387.045 205.355V205.355Z" fill="#F2F2F2"/>
      <path id="Vector_49" d="M387.045 259.814H213.593C212.187 259.814 210.838 259.256 209.844 258.263C208.85 257.27 208.291 255.924 208.291 254.519C208.291 253.115 208.85 251.769 209.844 250.776C210.838 249.783 212.187 249.225 213.593 249.225H387.045C388.451 249.225 389.8 249.783 390.794 250.776C391.788 251.769 392.347 253.115 392.347 254.519C392.347 255.924 391.788 257.27 390.794 258.263C389.8 259.256 388.451 259.814 387.045 259.814Z" fill="#F2F2F2"/>
      <path id="Vector_50" d="M387.045 314.273H213.593C212.187 314.273 210.838 313.715 209.844 312.722C208.85 311.729 208.291 310.383 208.291 308.978C208.291 307.574 208.85 306.227 209.844 305.234C210.838 304.242 212.187 303.684 213.593 303.684H387.045C388.451 303.684 389.8 304.242 390.794 305.234C391.788 306.227 392.347 307.574 392.347 308.978C392.347 310.383 391.788 311.729 390.794 312.722C389.8 313.715 388.451 314.273 387.045 314.273Z" fill="#F2F2F2"/>
      <path id="Vector_51" d="M387.045 368.732H213.593C212.187 368.732 210.838 368.174 209.844 367.181C208.85 366.188 208.291 364.841 208.291 363.437C208.291 362.033 208.85 360.686 209.844 359.693C210.838 358.7 212.187 358.143 213.593 358.143H387.045C388.451 358.143 389.8 358.7 390.794 359.693C391.788 360.686 392.347 362.033 392.347 363.437C392.347 364.841 391.788 366.188 390.794 367.181C389.8 368.174 388.451 368.732 387.045 368.732V368.732Z" fill="#F2F2F2"/>
      <path id="Vector_52" d="M387.045 423.191H213.593C212.187 423.191 210.838 422.633 209.844 421.64C208.85 420.647 208.291 419.3 208.291 417.896C208.291 416.492 208.85 415.145 209.844 414.152C210.838 413.159 212.187 412.601 213.593 412.601H387.045C388.451 412.601 389.8 413.159 390.794 414.152C391.788 415.145 392.347 416.492 392.347 417.896C392.347 419.3 391.788 420.647 390.794 421.64C389.8 422.633 388.451 423.191 387.045 423.191Z" fill="#F2F2F2"/>
      <path id="bar1" d="M356.748 205.355H212.836C211.43 205.355 210.081 204.797 209.087 203.804C208.092 202.812 207.534 201.465 207.534 200.061C207.534 198.656 208.092 197.31 209.087 196.317C210.081 195.324 211.43 194.766 212.836 194.766H356.748C358.154 194.766 359.502 195.324 360.497 196.317C361.491 197.31 362.05 198.656 362.05 200.061C362.05 201.465 361.491 202.812 360.497 203.804C359.502 204.797 358.154 205.355 356.748 205.355V205.355Z" fill="#6C63FF"/>
      <path id="bar2" d="M312.059 259.814H212.836C211.43 259.814 210.081 259.256 209.087 258.263C208.092 257.27 207.534 255.924 207.534 254.519C207.534 253.115 208.092 251.769 209.087 250.776C210.081 249.783 211.43 249.225 212.836 249.225H312.059C313.465 249.225 314.814 249.783 315.808 250.776C316.803 251.769 317.361 253.115 317.361 254.519C317.361 255.924 316.803 257.27 315.808 258.263C314.814 259.256 313.465 259.814 312.059 259.814Z" fill="#6C63FF"/>
      <path id="bar3" d="M257.524 314.273H212.836C211.43 314.273 210.081 313.715 209.087 312.722C208.092 311.729 207.534 310.383 207.534 308.978C207.534 307.574 208.092 306.227 209.087 305.234C210.081 304.242 211.43 303.684 212.836 303.684H257.524C258.93 303.684 260.279 304.242 261.273 305.234C262.268 306.227 262.826 307.574 262.826 308.978C262.826 310.383 262.268 311.729 261.273 312.722C260.279 313.715 258.93 314.273 257.524 314.273V314.273Z" fill="#6C63FF"/>
      <path id="bar4" d="M370.381 368.732H212.836C211.43 368.732 210.081 368.174 209.087 367.181C208.092 366.188 207.534 364.841 207.534 363.437C207.534 362.033 208.092 360.686 209.087 359.693C210.081 358.7 211.43 358.143 212.836 358.143H370.381C371.788 358.143 373.136 358.7 374.131 359.693C375.125 360.686 375.684 362.033 375.684 363.437C375.684 364.841 375.125 366.188 374.131 367.181C373.136 368.174 371.788 368.732 370.381 368.732V368.732Z" fill="#6C63FF"/>
      <path id="bar5" d="M335.54 423.191H212.836C211.43 423.191 210.081 422.633 209.087 421.64C208.092 420.647 207.534 419.3 207.534 417.896C207.534 416.492 208.092 415.145 209.087 414.152C210.081 413.159 211.43 412.601 212.836 412.601H335.54C336.946 412.601 338.294 413.159 339.289 414.152C340.283 415.145 340.842 416.492 340.842 417.896C340.842 419.3 340.283 420.647 339.289 421.64C338.294 422.633 336.946 423.191 335.54 423.191V423.191Z" fill="#6C63FF"/>
      <path id="Vector_53" d="M459.001 194.766H457.486V205.355H459.001V194.766Z" fill="#6C63FF"/>
      <path id="Vector_54" d="M470.362 206.112C469.164 206.112 467.992 205.757 466.996 205.092C465.999 204.427 465.223 203.482 464.764 202.376C464.305 201.271 464.185 200.054 464.419 198.88C464.653 197.706 465.23 196.628 466.078 195.782C466.925 194.936 468.005 194.359 469.18 194.126C470.356 193.892 471.574 194.012 472.681 194.47C473.788 194.928 474.735 195.704 475.401 196.699C476.066 197.694 476.422 198.864 476.422 200.061C476.42 201.665 475.781 203.203 474.645 204.337C473.509 205.472 471.969 206.11 470.362 206.112V206.112ZM470.362 195.522C469.463 195.522 468.585 195.789 467.837 196.287C467.09 196.786 466.508 197.495 466.164 198.324C465.82 199.153 465.73 200.066 465.905 200.946C466.08 201.826 466.513 202.635 467.149 203.27C467.784 203.904 468.594 204.337 469.476 204.512C470.357 204.687 471.271 204.597 472.101 204.253C472.932 203.91 473.642 203.328 474.141 202.582C474.64 201.836 474.907 200.958 474.907 200.061C474.906 198.857 474.426 197.704 473.574 196.853C472.722 196.002 471.567 195.524 470.362 195.522V195.522Z" fill="#6C63FF"/>
      <path id="Vector_55" d="M459.001 249.225H457.486V259.814H459.001V249.225Z" fill="#6C63FF"/>
      <path id="Vector_56" d="M470.362 260.57C469.164 260.57 467.992 260.216 466.996 259.551C465.999 258.886 465.223 257.941 464.764 256.835C464.305 255.729 464.185 254.513 464.419 253.339C464.653 252.165 465.23 251.087 466.078 250.241C466.925 249.395 468.005 248.818 469.18 248.585C470.356 248.351 471.574 248.471 472.681 248.929C473.788 249.387 474.735 250.163 475.401 251.158C476.066 252.153 476.422 253.323 476.422 254.519C476.42 256.124 475.781 257.662 474.645 258.796C473.509 259.93 471.969 260.569 470.362 260.57ZM470.362 249.981C469.463 249.981 468.585 250.247 467.837 250.746C467.09 251.245 466.508 251.953 466.164 252.783C465.82 253.612 465.73 254.524 465.905 255.405C466.08 256.285 466.513 257.094 467.149 257.728C467.784 258.363 468.594 258.795 469.476 258.97C470.357 259.146 471.271 259.056 472.101 258.712C472.932 258.369 473.642 257.787 474.141 257.041C474.64 256.294 474.907 255.417 474.907 254.519C474.906 253.316 474.426 252.163 473.574 251.312C472.722 250.461 471.567 249.983 470.362 249.981V249.981Z" fill="#6C63FF"/>
      <path id="Vector_57" d="M459.001 303.684H457.486V314.273H459.001V303.684Z" fill="#6C63FF"/>
      <path id="Vector_58" d="M470.362 315.029C469.164 315.029 467.992 314.674 466.996 314.01C465.999 313.345 465.223 312.4 464.764 311.294C464.305 310.188 464.185 308.972 464.419 307.798C464.653 306.624 465.23 305.546 466.078 304.7C466.925 303.853 468.005 303.277 469.18 303.044C470.356 302.81 471.574 302.93 472.681 303.388C473.788 303.846 474.735 304.622 475.401 305.617C476.066 306.612 476.422 307.782 476.422 308.978C476.42 310.583 475.781 312.121 474.645 313.255C473.509 314.389 471.969 315.027 470.362 315.029V315.029ZM470.362 304.44C469.463 304.44 468.585 304.706 467.837 305.205C467.09 305.704 466.508 306.412 466.164 307.242C465.82 308.071 465.73 308.983 465.905 309.864C466.08 310.744 466.513 311.553 467.149 312.187C467.784 312.822 468.594 313.254 469.476 313.429C470.357 313.604 471.271 313.515 472.101 313.171C472.932 312.828 473.642 312.246 474.141 311.5C474.64 310.753 474.907 309.876 474.907 308.978C474.906 307.775 474.426 306.622 473.574 305.771C472.722 304.92 471.567 304.441 470.362 304.44V304.44Z" fill="#6C63FF"/>
      <path id="dot2" d="M470.362 420.921C472.036 420.921 473.392 419.567 473.392 417.896C473.392 416.225 472.036 414.87 470.362 414.87C468.689 414.87 467.333 416.225 467.333 417.896C467.333 419.567 468.689 420.921 470.362 420.921Z" fill="#6C63FF"/>
      <path id="Vector_59" d="M459.001 358.143H457.486V368.732H459.001V358.143Z" fill="#6C63FF"/>
      <path id="Vector_60" d="M470.362 369.488C469.164 369.488 467.992 369.133 466.996 368.468C465.999 367.804 465.223 366.858 464.764 365.753C464.305 364.647 464.185 363.43 464.419 362.257C464.653 361.083 465.23 360.005 466.078 359.158C466.925 358.312 468.005 357.736 469.18 357.502C470.356 357.269 471.574 357.389 472.681 357.847C473.788 358.305 474.735 359.08 475.401 360.075C476.066 361.07 476.422 362.24 476.422 363.437C476.42 365.041 475.781 366.579 474.645 367.714C473.509 368.848 471.969 369.486 470.362 369.488V369.488ZM470.362 358.899C469.463 358.899 468.585 359.165 467.837 359.664C467.09 360.162 466.508 360.871 466.164 361.7C465.82 362.53 465.73 363.442 465.905 364.322C466.08 365.203 466.513 366.012 467.149 366.646C467.784 367.281 468.594 367.713 469.476 367.888C470.357 368.063 471.271 367.973 472.101 367.63C472.932 367.286 473.642 366.705 474.141 365.958C474.64 365.212 474.907 364.335 474.907 363.437C474.906 362.234 474.426 361.08 473.574 360.23C472.722 359.379 471.567 358.9 470.362 358.899Z" fill="#6C63FF"/>
      <path id="Vector_61" d="M459.001 412.601H457.486V423.191H459.001V412.601Z" fill="#6C63FF"/>
      <path id="Vector_62" d="M470.362 423.947C469.164 423.947 467.992 423.592 466.996 422.927C465.999 422.262 465.223 421.317 464.764 420.212C464.305 419.106 464.185 417.889 464.419 416.715C464.653 415.542 465.23 414.464 466.078 413.617C466.925 412.771 468.005 412.195 469.18 411.961C470.356 411.728 471.574 411.848 472.681 412.306C473.788 412.764 474.735 413.539 475.401 414.534C476.066 415.529 476.422 416.699 476.422 417.896C476.42 419.5 475.781 421.038 474.645 422.173C473.509 423.307 471.969 423.945 470.362 423.947V423.947ZM470.362 413.358C469.463 413.358 468.585 413.624 467.837 414.123C467.09 414.621 466.508 415.33 466.164 416.159C465.82 416.988 465.73 417.901 465.905 418.781C466.08 419.662 466.513 420.47 467.149 421.105C467.784 421.74 468.594 422.172 469.476 422.347C470.357 422.522 471.271 422.432 472.101 422.089C472.932 421.745 473.642 421.164 474.141 420.417C474.64 419.671 474.907 418.794 474.907 417.896C474.906 416.693 474.426 415.539 473.574 414.688C472.722 413.838 471.567 413.359 470.362 413.358Z" fill="#6C63FF"/>
      <path id="dot1" d="M470.362 203.086C472.036 203.086 473.392 201.732 473.392 200.061C473.392 198.39 472.036 197.035 470.362 197.035C468.689 197.035 467.333 198.39 467.333 200.061C467.333 201.732 468.689 203.086 470.362 203.086Z" fill="#6C63FF"/>
      <path id="Vector_63" d="M470.362 366.463C472.036 366.463 473.392 365.108 473.392 363.437C473.392 361.766 472.036 360.412 470.362 360.412C468.689 360.412 467.333 361.766 467.333 363.437C467.333 365.108 468.689 366.463 470.362 366.463Z" fill="#6C63FF"/>
      <path id="dot2_2" d="M470.362 420.921C472.036 420.921 473.392 419.567 473.392 417.896C473.392 416.225 472.036 414.87 470.362 414.87C468.689 414.87 467.333 416.225 467.333 417.896C467.333 419.567 468.689 420.921 470.362 420.921Z" fill="#6C63FF"/>
      <path id="Vector_64" d="M341.978 150.518C344.906 150.518 347.28 148.148 347.28 145.224C347.28 142.299 344.906 139.929 341.978 139.929C339.049 139.929 336.676 142.299 336.676 145.224C336.676 148.148 339.049 150.518 341.978 150.518Z" fill="#3F3D56"/>
      <path id="Vector_65" d="M341.978 10.5892C344.906 10.5892 347.28 8.21874 347.28 5.29461C347.28 2.37048 344.906 0 341.978 0C339.049 0 336.676 2.37048 336.676 5.29461C336.676 8.21874 339.049 10.5892 341.978 10.5892Z" fill="#3F3D56"/>
      <path id="Vector_66" d="M342.735 5.29453H341.22V145.223H342.735V5.29453Z" fill="#3F3D56"/>
      <path id="Vector_67" d="M648.825 290.809V309.549C648.825 309.549 653.343 339.739 653.343 366.113C653.343 392.486 646.045 453.909 646.045 453.909C646.045 453.909 631.45 459.114 630.408 451.132C629.365 443.151 626.585 400.815 626.585 394.568C626.585 388.322 614.423 340.78 614.423 340.78L606.777 393.527C606.777 393.527 609.21 455.991 606.777 457.726C604.345 459.461 592.53 462.584 591.14 459.461C589.75 456.338 582.452 389.363 582.452 389.363C582.452 389.363 576.545 301.914 580.02 296.709C583.495 291.503 586.622 287.339 586.622 287.339C586.622 287.339 636.315 275.194 648.825 290.809Z" fill="#2F2E41"/>
      <path id="Vector_68" d="M644.308 451.826L645.18 457.483C645.471 459.413 645.661 461.357 645.749 463.306C645.885 466.148 646.358 470.526 647.98 471.22C650.412 472.261 666.201 485.558 655.081 486.252C643.961 486.946 638.397 488.145 635.104 485.591C631.209 482.572 635.62 483.939 633.883 483.939C632.145 483.939 630.06 483.939 629.365 481.163C628.67 478.387 630.408 473.529 630.408 473.529V451.826H644.308Z" fill="#2F2E41"/>
      <path id="Vector_69" d="M592.421 451.555L591.55 457.211C591.258 459.141 591.068 461.085 590.98 463.035C590.844 465.876 590.371 470.254 588.749 470.948C586.317 471.989 570.528 485.286 581.648 485.98C592.768 486.674 598.332 487.873 601.625 485.319C605.52 482.3 601.109 483.667 602.846 483.667C604.584 483.667 606.669 483.667 607.364 480.891C608.059 478.115 606.321 473.257 606.321 473.257V451.555H592.421Z" fill="#2F2E41"/>
      <path id="Vector_70" d="M602.26 140.203C602.26 140.203 608.167 154.778 612.338 157.207C616.508 159.636 614.423 170.741 614.423 170.741L603.997 185.316H595.657L585.58 167.965C585.58 167.965 584.885 156.513 582.8 153.737C580.715 150.961 602.26 140.203 602.26 140.203Z" fill="#FFB9B9"/>
      <path id="Vector_71" d="M610.947 170.047L626.585 173.517L638.053 288.727C638.053 288.727 631.798 289.768 625.543 298.097C619.288 306.425 611.643 305.037 607.82 302.955C603.997 300.873 588.707 294.974 588.36 292.545C588.012 290.115 589.055 247.432 589.055 247.432L579.325 180.804L584.19 173.517H592.877L599.827 179.416L610.947 170.047Z" fill="#6C63FF"/>
      <path id="Vector_72" d="M613.38 164.147C613.38 164.147 647.435 167.618 650.563 174.905C653.691 182.192 648.478 214.465 648.478 214.465C648.478 214.465 660.988 242.574 660.641 249.167C660.293 255.761 672.456 300.873 659.251 295.668C646.045 290.463 650.215 276.929 643.613 286.645C637.01 296.362 634.23 294.974 634.23 294.974C634.23 294.974 627.628 305.731 625.543 304.69C623.458 303.649 622.068 295.668 626.585 291.851C631.103 288.033 630.408 281.44 621.72 268.947C613.033 256.455 603.997 190.868 609.21 180.804C614.423 170.741 613.38 164.147 613.38 164.147Z" fill="#575A89"/>
      <path id="Vector_73" d="M648.826 297.403L642.918 302.955L635.62 298.097L638.748 290.81L648.826 297.403Z" fill="#FFB9B9"/>
      <path id="Vector_74" d="M588.36 170.047C588.36 170.047 561.949 179.763 561.949 190.174C561.949 200.584 577.934 246.044 577.934 246.044C577.934 246.044 577.935 257.843 577.24 260.619C576.545 263.395 565.611 287.608 575.154 289.768C581.112 291.117 586.006 294.659 586.448 299.658C586.973 305.595 582.422 313.088 582.8 314.407C583.495 316.836 587.665 320.306 587.317 318.571C586.97 316.836 590.097 291.851 594.962 280.746C599.827 269.641 592.877 195.032 591.487 185.316C590.816 180.157 589.771 175.054 588.36 170.047V170.047Z" fill="#575A89"/>
      <path id="Vector_75" d="M574.46 296.708L580.715 311.631L585.406 302.088L580.019 290.115L574.46 296.708Z" fill="#FFB9B9"/>
      <path id="Vector_76" d="M607.675 151.383C607.675 151.383 613.38 153.737 616.855 153.737C620.33 153.737 634.578 161.024 629.713 165.536C624.848 170.047 617.55 171.088 614.075 177.681C610.6 184.275 608.862 185.316 608.862 185.316L602.676 177.016C602.676 177.016 611.295 167.271 610.947 164.147C610.6 161.024 607.675 151.383 607.675 151.383Z" fill="#6C63FF"/>
      <path id="Vector_77" d="M584.641 159.726C584.641 159.726 580.367 161.371 579.325 164.147C578.282 166.924 571.679 172.129 574.459 173.517C577.24 174.905 589.402 180.457 591.835 181.498C594.267 182.539 598.801 178.545 598.801 178.545C598.801 178.545 592.703 175.079 592.703 172.649C592.703 170.22 584.641 159.726 584.641 159.726Z" fill="#6C63FF"/>
      <path id="Vector_78" d="M570.289 185.316L561.949 187.398C561.949 187.398 550.482 238.757 553.957 251.596C557.432 264.436 573.765 302.955 573.765 302.955L584.19 290.809C584.19 290.809 579.642 263.19 577.051 261.384C574.46 259.578 576.197 255.761 576.197 254.719C576.197 253.678 577.24 254.372 574.807 251.943C572.375 249.514 583.842 235.98 580.715 232.163C577.587 228.346 570.289 185.316 570.289 185.316Z" fill="#575A89"/>
      <path id="Vector_79" opacity="0.1" d="M652.474 194.859L647.436 175.946C647.436 175.946 660.988 185.663 663.768 199.89C666.548 214.118 677.321 242.574 670.371 255.067C663.421 267.559 651.258 303.649 647.088 302.955C642.918 302.261 632.84 293.586 632.493 292.198C632.145 290.81 650.563 258.884 647.783 256.455C645.003 254.025 645.698 247.779 647.783 246.391C649.868 245.003 652.301 238.41 650.563 238.757C648.826 239.104 643.613 235.633 644.656 231.816C645.698 227.999 639.443 202.32 639.443 202.32L652.474 194.859Z" fill="black"/>
      <path id="Vector_80" d="M645.698 173.517L650.563 174.905C650.563 174.905 664.116 184.622 666.896 198.849C669.676 213.077 680.449 241.533 673.499 254.025C666.548 266.518 654.386 302.608 650.216 301.914C646.046 301.22 635.968 292.545 635.62 291.157C635.273 289.768 653.691 257.843 650.911 255.414C648.131 252.984 648.826 246.738 650.911 245.35C652.996 243.962 655.428 237.369 653.691 237.716C651.953 238.063 646.741 234.592 647.783 230.775C648.826 226.958 642.57 201.279 642.57 201.279L645.698 173.517Z" fill="#575A89"/>
      <g id="head">
        <path id="Vector_81" opacity="0.1" d="M602.26 140.203C602.26 140.203 608.167 154.778 612.338 157.207C616.508 159.636 614.423 170.741 614.423 170.741L603.997 185.316H595.657L585.58 167.965C585.58 167.965 584.885 156.513 582.8 153.737C580.715 150.961 602.26 140.203 602.26 140.203Z" fill="black"/>
        <path id="Vector_82" d="M587.317 158.248C597.297 158.248 605.387 150.169 605.387 140.203C605.387 130.237 597.297 122.158 587.317 122.158C577.337 122.158 569.247 130.237 569.247 140.203C569.247 150.169 577.337 158.248 587.317 158.248Z" fill="#FFB9B9"/>
        <path id="Vector_83" d="M601.34 123.915L604.729 122.684C604.729 122.684 597.643 115.607 587.783 116.223L590.556 113.454C590.556 113.454 583.778 110.992 577.616 117.453C574.376 120.85 570.629 124.842 568.292 129.34H564.662L566.177 132.365L560.875 135.391L566.317 134.847C565.802 137.459 565.979 140.161 566.832 142.683L568.064 146.067C568.064 146.067 572.994 136.222 572.994 134.991V138.068C572.994 138.068 576.383 135.299 576.383 133.453L578.232 135.606L579.156 132.222L590.556 135.606L588.708 132.837L595.794 133.76L593.021 130.376C593.021 130.376 601.032 134.376 601.34 137.76C601.648 141.145 605.654 145.452 605.654 145.452L607.502 142.375C607.502 142.375 610.275 128.53 601.34 123.915Z" fill="#2F2E41"/>
      </g>
      <path id="Vector_84" d="M600.64 142.198C602.105 142.198 603.291 140.336 603.291 138.038C603.291 135.74 602.105 133.878 600.64 133.878C599.176 133.878 597.989 135.74 597.989 138.038C597.989 140.336 599.176 142.198 600.64 142.198Z" fill="#FFB9B9"/>
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M0 0h701v488H0z" />
      </clipPath>
    </defs>
  </svg>
)
