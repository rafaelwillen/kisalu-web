import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ClientRegisterSVG = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg aria-labelledby={titleId} viewBox="0 0 804 592" {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#e4e4e4"
      d="M798.604 35.063H4.448A4.453 4.453 0 0 1 0 30.615V4.448A4.453 4.453 0 0 1 4.448 0h794.156a4.453 4.453 0 0 1 4.448 4.448v26.167a4.453 4.453 0 0 1-4.448 4.448Z"
    />
    <circle
      cx={25.815}
      cy={16.255}
      r={6.316}
      fill="#fff"
      data-name="a7a88a4d-66b2-4c09-a29b-e65e87e57a01"
    />
    <circle
      cx={49.787}
      cy={16.255}
      r={6.316}
      fill="#fff"
      data-name="ecd091ab-fa27-42b2-b94f-bd1073aab054"
    />
    <circle
      cx={73.76}
      cy={16.255}
      r={6.316}
      fill="#fff"
      data-name="a332723e-32dc-4e13-8ae5-d2643a7feb7f"
    />
    <path
      fill="#fff"
      d="M775.117 11.908h-27.604a2.045 2.045 0 0 1 0-4.09h27.604a2.045 2.045 0 0 1 .008 4.09ZM775.117 19.576h-27.604a2.045 2.045 0 0 1 0-4.09h27.604a2.045 2.045 0 0 1 .008 4.09ZM775.117 27.244h-27.604a2.045 2.045 0 0 1 0-4.09h27.604a2.045 2.045 0 0 1 .008 4.09Z"
    />
    <path
      fill="#f0f0f0"
      d="M226.443 519.964c2.922-23.498 17.485-46.65 39.895-54.298a109.098 109.098 0 0 0 .006 74.904c3.443 9.315 8.243 19.317 5.004 28.704-2.015 5.842-6.946 10.311-12.457 13.105-5.511 2.795-11.628 4.127-17.667 5.432l-1.19.983c-9.588-21.65-16.513-45.332-13.59-68.83Z"
    />
    <path
      fill="#fff"
      d="M266.56 466.11a93.25 93.25 0 0 0-23.181 52.482 40.156 40.156 0 0 0 .457 12.574 23.032 23.032 0 0 0 5.728 10.682c2.582 2.837 5.551 5.44 7.399 8.854a14.102 14.102 0 0 1 .689 11.513c-1.631 4.678-4.846 8.491-8.12 12.11-3.634 4.02-7.472 8.136-9.017 13.464-.187.645-1.178.317-.991-.327 2.688-9.27 11.686-14.535 15.977-22.884 2.003-3.896 2.843-8.419.966-12.531-1.642-3.596-4.701-6.283-7.34-9.132a24.577 24.577 0 0 1-5.99-10.237 37.123 37.123 0 0 1-.94-12.51 90.469 90.469 0 0 1 6.608-27.492 94.904 94.904 0 0 1 17.065-27.348c.446-.5 1.134.286.69.783Z"
    />
    <path
      fill="#fff"
      d="M243.66 512.276a13.99 13.99 0 0 1-10.65-14.655.522.522 0 0 1 1.043.052 12.955 12.955 0 0 0 9.934 13.612c.653.156.322 1.146-.327.991ZM248.065 540.582a26.965 26.965 0 0 0 12.042-15.53c.19-.645 1.18-.317.991.327a28.048 28.048 0 0 1-12.563 16.135c-.579.344-1.045-.59-.47-.932ZM253.86 483.642a7.92 7.92 0 0 0 7.505-.381c.575-.35 1.04.584.47.932a8.874 8.874 0 0 1-8.302.44.54.54 0 0 1-.331-.66.524.524 0 0 1 .659-.331Z"
    />
    <path
      fill="#f0f0f0"
      d="M334.647 507.637c-.352.229-.704.458-1.057.696a104.292 104.292 0 0 0-13.335 10.41c-.326.292-.652.59-.969.89a109.948 109.948 0 0 0-23.878 32.687 106.772 106.772 0 0 0-5.849 15.132c-2.158 7.161-3.928 15.097-8.2 20.954a18.318 18.318 0 0 1-1.427 1.762h-38.606c-.087-.044-.175-.08-.264-.123l-1.541.07c.062-.273.132-.555.194-.828.035-.158.079-.317.114-.475.027-.106.053-.212.07-.309.01-.035.018-.07.027-.097.018-.096.044-.185.062-.273q.581-2.365 1.198-4.73c0-.008 0-.008.008-.017a156.995 156.995 0 0 1 13.212-34.686c.177-.326.353-.66.547-.987a101.885 101.885 0 0 1 9.151-13.881 90.071 90.071 0 0 1 5.999-6.862 74.9 74.9 0 0 1 18.743-14.04c13.846-7.31 29.877-10.111 44.674-5.646.379.115.749.23 1.127.353Z"
    />
    <path
      fill="#fff"
      d="M334.56 508.127a93.25 93.25 0 0 0-50.106 27.946 40.157 40.157 0 0 0-7.205 10.314 23.032 23.032 0 0 0-1.858 11.979c.353 3.82 1.157 7.685.576 11.524a14.103 14.103 0 0 1-6.381 9.607c-4.119 2.753-8.981 3.862-13.774 4.781-5.321 1.021-10.865 1.997-15.306 5.32-.538.404-1.132-.455-.594-.857 7.727-5.783 18.081-4.57 26.534-8.652 3.945-1.905 7.339-5.01 8.316-9.424.854-3.86.029-7.847-.363-11.711a24.577 24.577 0 0 1 1.38-11.78 37.125 37.125 0 0 1 6.783-10.553 90.47 90.47 0 0 1 21.828-17.974 94.904 94.904 0 0 1 30.09-11.56c.658-.131.733.91.08 1.04Z"
    />
    <path
      fill="#fff"
      d="M288.48 531.2a13.99 13.99 0 0 1 .321-18.114c.446-.502 1.248.166.801.67a12.955 12.955 0 0 0-.263 16.85c.428.517-.433 1.108-.858.594ZM274.956 556.453a26.966 26.966 0 0 0 18.965-5.15c.54-.401 1.133.457.594.858a28.048 28.048 0 0 1-19.745 5.319c-.669-.075-.479-1.101.186-1.027ZM313.865 514.478a7.92 7.92 0 0 0 6.222 4.214c.67.066.479 1.093-.186 1.027a8.874 8.874 0 0 1-6.893-4.646.54.54 0 0 1 .131-.727.524.524 0 0 1 .727.132Z"
    />
    <path
      fill="#e6e6e6"
      d="M260.293 182.444H132.567a14.904 14.904 0 0 1-14.887-14.887V97.99a14.903 14.903 0 0 1 14.887-14.886h127.726A14.903 14.903 0 0 1 275.18 97.99v69.566a14.904 14.904 0 0 1-14.887 14.887Z"
    />
    <path
      fill="#08999e"
      d="M455.293 182.444H327.567a14.904 14.904 0 0 1-14.887-14.887V97.99a14.903 14.903 0 0 1 14.887-14.886h127.726A14.903 14.903 0 0 1 470.18 97.99v69.566a14.904 14.904 0 0 1-14.887 14.887Z"
    />
    <path
      fill="#e6e6e6"
      d="M650.293 182.444H522.567a14.904 14.904 0 0 1-14.887-14.887V97.99a14.903 14.903 0 0 1 14.887-14.886h127.726A14.903 14.903 0 0 1 665.18 97.99v69.566a14.904 14.904 0 0 1-14.887 14.887Z"
    />
    <path
      fill="#f2f2f2"
      d="M260.293 337.444H132.567a14.904 14.904 0 0 1-14.887-14.887V252.99a14.903 14.903 0 0 1 14.887-14.886h127.726a14.903 14.903 0 0 1 14.887 14.886v69.566a14.904 14.904 0 0 1-14.887 14.887Z"
    />
    <path
      fill="#e6e6e6"
      d="M455.293 337.444H327.567a14.904 14.904 0 0 1-14.887-14.887V252.99a14.903 14.903 0 0 1 14.887-14.886h127.726a14.903 14.903 0 0 1 14.887 14.886v69.566a14.904 14.904 0 0 1-14.887 14.887Z"
    />
    <g data-name="aa405d94-515b-444f-88dd-2c52df39214d">
      <circle
        cx={464.312}
        cy={327.433}
        r={22.812}
        fill="#08999e"
        data-name="ede3a9f0-5e02-4455-ac7e-751a5f8c3692"
      />
      <path
        fill="#fff"
        d="M473.784 325.517h-7.756v-7.756a1.825 1.825 0 0 0-1.825-1.825 1.825 1.825 0 0 0-1.825 1.825v7.756h-7.756a1.825 1.825 0 0 0-1.825 1.826 1.825 1.825 0 0 0 1.825 1.825h7.756v7.756a1.825 1.825 0 0 0 1.825 1.825 1.825 1.825 0 0 0 1.825-1.825v-7.756h7.756a1.825 1.825 0 0 0 1.825-1.826 1.825 1.825 0 0 0-1.825-1.825Z"
        data-name="ba039ca8-d148-45ed-9781-bacb7304e881"
      />
    </g>
    <g data-name="bbf41f8a-587e-4352-8304-6d86282586e3">
      <circle
        cx={662.312}
        cy={176.433}
        r={22.812}
        fill="#08999e"
        data-name="e4c91425-bc08-43ed-9b2d-9a6452dd6ab0"
      />
      <path
        fill="#fff"
        d="M671.784 174.517h-7.756v-7.756a1.825 1.825 0 0 0-1.825-1.825 1.825 1.825 0 0 0-1.825 1.825v7.756h-7.756a1.825 1.825 0 0 0-1.825 1.826 1.825 1.825 0 0 0 1.825 1.825h7.756v7.756a1.825 1.825 0 0 0 1.825 1.825 1.825 1.825 0 0 0 1.825-1.825v-7.756h7.756a1.825 1.825 0 0 0 1.825-1.826 1.825 1.825 0 0 0-1.825-1.825Z"
        data-name="b08e8960-896e-4763-a2dc-6c3da3e5d175"
      />
    </g>
    <g data-name="b77ad267-181d-433f-b31f-af61e58bf4a6">
      <circle
        cx={269.312}
        cy={174.433}
        r={22.812}
        fill="#08999e"
        data-name="e8aef769-5476-47e9-8295-ae809767f9aa"
      />
      <path
        fill="#fff"
        d="M278.784 172.517h-7.756v-7.756a1.825 1.825 0 0 0-1.825-1.825 1.825 1.825 0 0 0-1.825 1.825v7.756h-7.756a1.825 1.825 0 0 0-1.825 1.826 1.825 1.825 0 0 0 1.825 1.825h7.756v7.756a1.825 1.825 0 0 0 1.825 1.825 1.825 1.825 0 0 0 1.825-1.825v-7.756h7.756a1.825 1.825 0 0 0 1.826-1.826 1.825 1.825 0 0 0-1.826-1.825Z"
        data-name="efbebd4e-dbd2-4103-8d2c-f0ca8346a3bf"
      />
    </g>
    <path
      fill="#9e616a"
      d="M440.102 142.92a9.07 9.07 0 0 1-7.32 11.824l-10.55 72.001-17.302-8.45 17.403-71.871a9.119 9.119 0 0 1 17.769-3.504ZM314.115 373.52a9.07 9.07 0 0 0-3.492-13.462l7.117-76.586-14.905 7.64-4.654 73.8a9.119 9.119 0 0 0 15.934 8.608ZM324.298 334.784l63.961-2.46 3.69-66.421h-73.801l6.15 68.881zM312.427 569.355l10.93-.001 5.199-42.157h-16.131l.002 42.158z"
    />
    <path
      fill="#2f2e41"
      d="m309.716 563.963 17.278-1.031v7.402l16.426 11.345a4.624 4.624 0 0 1-2.628 8.43h-20.57l-3.545-7.323-1.384 7.322h-7.756Z"
    />
    <path
      fill="#9e616a"
      d="m361.041 569.355 10.93-.001 5.199-42.157h-16.131l.002 42.158z"
    />
    <path
      fill="#2f2e41"
      d="M323.41 319.192s-19.137 15.45-8.763 70.628c-1.58.188.21 3.302.21 3.302l1.497 44.96 1.156 5.153-3.846 8.314 1.586 9.034-4.888 81.992 18.057 2.335 17.28-85.143 3.291-9.573 3.301-8.39-1.78-8.948 1.46-13.888 9.962-46.83 2.438 81.219-3.403 7.754 1.894 8.511-4.219 4.518-1.667 75.99 19.254.901 15.931-76.603-1.235-9.776 2.12-7.227V440.54l3.63-7.968 7.914-43.447s2.387-33.958-15.032-73.92Z"
    />
    <path
      fill="#3f3d56"
      d="M331.21 210.7s-24.172 4.781-28.337 25.395-6.844 67.263-6.844 67.263l.912 6.497 23.382 5.421 14.923-65.362ZM386.373 217.659s2.45-3.433 16.171-3.963c.565-.022-.134-1.143-.134-1.143l6.599-32.252 21.99 12.175-3.712 33.813-36.135 41.1Z"
    />
    <path
      fill="#3f3d56"
      d="M372.666 313.81c-10.353 0-25.936-1.142-49.396-4.625a7.165 7.165 0 0 1-6.013-5.999 5.424 5.424 0 0 1-.912-6.16l.022-.042-.531-.627a5.8 5.8 0 0 1-.387-7.011l-7.265-51.975a21.896 21.896 0 0 1 15.227-24.022l2.682-.835 10.143-13.266.2.002 32.56.434 10.567 13.418 17.08 4.027.045.26 3.966 22.914c2.063 11.918-2.668 16.606-8.705 27.087l1.772 29.434.804 1.46a3.96 3.96 0 0 1-.948 4.969 7.712 7.712 0 0 1 .105 4.772l-.418 1.38c0 .04-.11.602-1.013 1.286-1.626 1.235-6.294 3.119-19.585 3.119Z"
    />
    <path
      fill="#2f2e41"
      d="m358.33 563.963 17.278-1.031v7.402l16.426 11.345a4.624 4.624 0 0 1-2.627 8.43h-20.57l-3.546-7.323-1.384 7.322h-7.756Z"
    />
    <circle
      cx={549.754}
      cy={320.563}
      r={25.527}
      fill="#9e616a"
      transform="rotate(-80.783 359.83 360.045)"
    />
    <path
      fill="#2f2e41"
      d="M366.206 141.306c-9.356-6.435-17.595-7.415-24.363-5.59a8.897 8.897 0 0 0-3.558-3.16c-5.279-13.3-21.342-21.287-35.127-17.405-13.875 3.908-23.448 19.277-20.837 33.453 1.618 8.787 7.148 16.396 9.372 25.05 4.306 16.75-6.198 35.94-22.63 41.34 15.558 3.123 32.683-6.38 38.265-21.234 2.71-7.215 2.874-15.092 3.219-22.792a75.564 75.564 0 0 1 1.942-15.783 33.722 33.722 0 0 1 2.512-6.72 22.997 22.997 0 0 1 11.006-10.678 8.778 8.778 0 0 0 1.282 7.902c-3.649 4.57-5.635 9.514-5.635 12.474-7.58 13.852 3.26 25.751 17.112 33.33a28.38 28.38 0 0 0 18.133 3.161l.58-2.474.785 2.229 2.621 7.471q4.536 2.194 8.993 4.81c-1.129-5.3-2.042-10.592-2.67-15.766-.87-7.042 2.162-17.526 4.35-23.901a37.632 37.632 0 0 0 2.06-12.213v-.182l2.13 6.843 7.757-3.308c-1.443-8.277 0-17.672-17.299-16.857Z"
    />
    <path
      fill="#ccc"
      d="M685.173 591.375H117.88a1.19 1.19 0 0 1 0-2.381h567.294a1.19 1.19 0 0 1 0 2.381Z"
    />
    <circle
      cx={266.704}
      cy={330.431}
      r={22.812}
      fill="#e6e6e6"
      data-name="e4c91425-bc08-43ed-9b2d-9a6452dd6ab0"
    />
    <path
      fill="#f2f2f2"
      d="M609.939 317.32h-80.013a9.337 9.337 0 0 1-9.326-9.326v-43.579a9.336 9.336 0 0 1 9.326-9.326h80.013a9.336 9.336 0 0 1 9.326 9.326v43.579a9.337 9.337 0 0 1-9.326 9.326Z"
    />
    <g data-name="bc9af32e-f7cd-4c85-a4cc-5543d455b8de">
      <circle
        cx={611.118}
        cy={287.504}
        r={12.115}
        fill="#08999e"
        data-name="b56288f5-6382-4006-aaf1-aded98dde780"
      />
      <path
        fill="#fff"
        d="M616.148 286.487h-4.119v-4.12a.97.97 0 0 0-.969-.968.97.97 0 0 0-.97.969v4.119h-4.118a.97.97 0 0 0-.97.969.97.97 0 0 0 .97.97h4.119v4.118a.97.97 0 0 0 .97.97.97.97 0 0 0 .968-.97v-4.119h4.12a.97.97 0 0 0 .969-.969.97.97 0 0 0-.97-.97Z"
        data-name="b9aaef6b-2cfc-46ac-8dc0-30fdc28925de"
      />
    </g>
    <path
      fill="#08999e"
      d="M642.537 304.953h-65.938a10.568 10.568 0 0 1-10.556-10.555v-39.36a1.945 1.945 0 0 1 3.89 0v10.54l76.59 6.963a5.841 5.841 0 0 1 5.737 5.834 1.946 1.946 0 0 1-.033.358l-3.86 20.585a5.84 5.84 0 0 1-5.83 5.635Zm-72.605-35.469v24.914a6.674 6.674 0 0 0 6.667 6.666h65.938a1.947 1.947 0 0 0 1.945-1.945 1.946 1.946 0 0 1 .033-.358l3.85-20.536a1.947 1.947 0 0 0-1.939-1.795 1.81 1.81 0 0 1-.176-.008Z"
    />
    <circle cx={559.078} cy={319.863} r={3.241} fill="#08999e" />
    <circle cx={639.944} cy={319.863} r={3.241} fill="#08999e" />
    <path
      fill="#08999e"
      d="M643.185 316.622h-86.7a1.945 1.945 0 0 1 0-3.89h86.7a1.945 1.945 0 0 1 0 3.89ZM573.174 256.334h-16.855a1.945 1.945 0 0 1 0-3.89h16.855a1.945 1.945 0 0 1 0 3.89Z"
    />
    <path
      fill="#08999e"
      d="M586.695 315.632a1.937 1.937 0 0 1-1.267-.47l-12.782-10.985a1.945 1.945 0 1 1 2.534-2.95l12.783 10.985a1.945 1.945 0 0 1-1.268 3.42ZM589.388 303.759a1.945 1.945 0 0 1-1.944-1.945v-31.218a1.945 1.945 0 0 1 3.89 0v31.218a1.945 1.945 0 0 1-1.945 1.945ZM630.47 303.759a1.945 1.945 0 0 1-1.945-1.945V273.19a1.945 1.945 0 0 1 3.89 0v28.625a1.945 1.945 0 0 1-1.945 1.945Z"
    />
  </svg>
);
export default ClientRegisterSVG;
