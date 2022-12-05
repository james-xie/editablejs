import React from 'react'
import tw from 'twin.macro'

export const BoldIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M328 446h224.68C609.742 446 656 401.554 656 346.727v-9.454C656 282.446 609.742 238 552.68 238H328v208z m369.815 35.426C754.606 519.186 792 583.508 792 656.508v10.984C792 783.752 697.155 878 580.158 878h-318.67C245.202 878 232 864.798 232 848.512V169.39c0-15.127 12.263-27.39 27.39-27.39h295.9C663.93 142 752 229.267 752 336.915v10.17c0 52.073-20.609 99.378-54.185 134.341zM328 542.671V781.33h251.134c63.78 0 115.485-50.997 115.485-113.905v-10.848c0-62.908-51.705-113.905-115.485-113.905H328z"></path>
    </svg>
  )
}

export const ItalicIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M634.702 256L487.888 768H658a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H226a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8h162.02l146.813-512H366a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8h432a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H634.702z"
        p-id="9486"
      ></path>
    </svg>
  )
}

export const UnderlineIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M200 800h624c4.4 0 8 4.32 8 9.6v76.8c0 5.28-3.6 9.6-8 9.6H200c-4.4 0-8-4.32-8-9.6v-76.8c0-5.28 3.6-9.6 8-9.6z m312-72c-69.4 0-134.7-27-183.8-76.2C279.1 602.6 252 537.4 252 468V156c0-6.6 5.4-12 12-12h60c6.6 0 12 5.4 12 12v312c0 97 79 176 176 176s176-79 176-176V156c0-6.6 5.4-12 12-12h60c6.6 0 12 5.4 12 12v312c0 69.4-27 134.7-76.2 183.8C646.6 700.9 581.4 728 512 728z"
        p-id="9620"
      ></path>
    </svg>
  )
}

export const StrikethroughIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M552.545 560H72a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8h220.18c-9.49-9.775-17.235-20.379-23.392-31.965-11.614-21.98-17.273-46.945-17.273-76.485 0-34.512 6.75-65.842 20.251-92.895 13.203-26.556 32.958-49.332 58.57-67.732C376.199 162.102 441.32 144 513.588 144c79.02 0 144.339 21.284 188.713 61.665 31.667 28.644 52.315 66.837 59.661 110.3 0.695 3.88 1.29 9.25 1.985 16.013v0.995c0 5.57-4.566 10.145-10.125 10.145h-72.765c-4.765 0-9.034-3.382-9.927-8.156-1.49-7.758-2.978-13.725-4.269-17.803-6.452-20.489-17.173-38.193-31.766-52.614-28.69-28.346-70.978-42.768-125.775-42.768-48.047 0-88.45 11.14-116.841 32.126-28.788 21.284-43.977 52.017-43.977 89.016 0 36.8 17.075 64.649 52.216 85.137 24.62 14.223 55.492 24.169 106.815 34.214 3.064 0.607 5.847 1.15 8.89 1.73H952a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H752.908a138.547 138.547 0 0 0 13.323 20.826C778.242 603.8 784 630.356 784 662.184c0 33.617-6.651 64.45-19.655 91.502-12.906 26.855-32.065 50.128-57.08 69.025C657.827 860.208 587.246 880 503.064 880c-78.423 0-144.735-18.4-191.79-53.21-40.402-29.938-64.227-69.92-70.68-118.755-0.198-1.492-0.396-3.382-0.595-5.67v-0.994c0-5.57 4.566-10.145 10.126-10.145h79.713c4.468 0 8.538 3.083 9.729 7.46 0.993 3.779 1.886 6.763 2.68 8.95 10.523 29.74 30.575 53.212 59.661 69.523 29.484 16.51 66.511 24.964 110.19 24.964 54.897 0 100.065-12.532 130.54-36.402 28.094-21.98 43.58-53.51 43.58-88.817 0-39.784-17.472-68.826-53.308-89.016-14.593-8.156-32.164-15.019-55.194-21.484-7.736-2.163-15.797-4.223-25.172-6.404z"
        p-id="9754"
      ></path>
    </svg>
  )
}

export const CodeIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M553.363 163.663l62.602 13.307q7.825 1.663 6.162 9.488L479.915 855.511q-1.663 7.825-9.488 6.162l-62.602-13.307q-7.825-1.663-6.162-9.488l142.212-669.053q1.663-7.825 9.488-6.162zM712 334.415v81.297a8 8 0 0 1 3.07 6.3L830.062 512 715.07 601.988a8 8 0 0 1-3.07 6.3v81.297a8 8 0 0 1 12.93 6.301l218.96-171.284c6.96-5.444 8.189-15.5 2.744-22.46a16 16 0 0 1-2.744-2.744L724.93 328.114a8 8 0 0 1-12.93 6.301z m-400 0v81.297a8 8 0 0 0-3.07 6.3L193.938 512l114.992 89.988a8 8 0 0 0 3.07 6.3v81.297a8 8 0 0 0-12.93 6.301L80.11 524.602c-6.96-5.444-8.189-15.5-2.744-22.46a16 16 0 0 0 2.744-2.744l218.96-171.284a8 8 0 0 0 12.93 6.301z"
        p-id="9888"
      ></path>
    </svg>
  )
}

export const SubIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M184.182 120.227c-3.132-5.116-8.656-8.227-14.581-8.227H83.194c-3.358 0-6.285 0.852-8.722 2.522l-0.172 0.117-0.177 0.111c-7.908 4.949-10.254 15.391-5.15 23.483l188.57 299.163-3.37 5.37L66.497 741.995c-1.638 2.597-2.496 5.674-2.496 9.04C64 760.344 71.647 768 80.944 768h77.63c5.847 0 11.249-3.052 14.396-8.064l149.665-242.594 8.547 13.929L471.38 759.75c3.052 5.001 8.509 8.024 14.37 8.024h84.381c3.072 0 6.208-0.925 9.314-2.764 7.818-5.128 10.026-15.496 4.957-23.39L391.88 442.366l3.506-5.454L587.28 138.456c1.738-2.756 2.721-6.086 2.721-9.266 0-9.307-7.647-16.965-16.944-16.965h-80.33a17.086 17.086 0 0 1-14.546 8.167L331.876 365.264 184.182 120.227zM704 883.018V952a8 8 0 0 1 8 8h240a8 8 0 0 1 8-8v-64a8 8 0 0 1-8-8H791.103l166.904-189.734a8 8 0 0 1 1.993-5.284V616a8 8 0 0 1-8-8H712a8 8 0 0 1-8 8v64a8 8 0 0 1 8 8h160.897L705.993 877.734a8 8 0 0 1-1.993 5.284z"
        p-id="10022"
      ></path>
    </svg>
  )
}

export const SupIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M184.182 264.227c-3.132-5.116-8.656-8.227-14.581-8.227H83.194c-3.358 0-6.285 0.852-8.722 2.522l-0.172 0.117-0.177 0.111c-7.908 4.949-10.254 15.391-5.15 23.483l188.57 299.163-3.37 5.37L66.497 885.995c-1.638 2.597-2.496 5.674-2.496 9.04C64 904.344 71.647 912 80.944 912h77.63c5.847 0 11.249-3.052 14.396-8.064l149.665-242.594 8.547 13.929L471.38 903.75c3.052 5.001 8.509 8.024 14.37 8.024h84.381c3.072 0 6.208-0.925 9.314-2.764 7.818-5.128 10.026-15.496 4.957-23.39L391.88 586.366l3.506-5.454L587.28 282.456c1.738-2.756 2.721-6.086 2.721-9.266 0-9.307-7.647-16.965-16.944-16.965h-80.33a17.086 17.086 0 0 1-14.546 8.167L331.876 509.264 184.182 264.227zM704 339.031V408a8 8 0 0 1 8 8h240a8 8 0 0 1 8-8v-64a8 8 0 0 1-8-8H792.103L958.98 146.296a8 8 0 0 1 1.993-5.354l-0.607-69.012a8 8 0 0 1-8-7.93H712a8 8 0 0 1-8 8v64a8 8 0 0 1 8 8h161.897L706.01 333.73a8 8 0 0 1-2.01 5.3z"
        p-id="10156"
      ></path>
    </svg>
  )
}

export const CheckIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M357.472 848.422c12.166 0.107 24.365-4.48 33.648-13.763l558.546-558.546c18.35-18.35 18.352-48.11-0.002-66.463l-1.417-1.417c-18.357-18.357-48.11-18.355-66.463-0.002L357.448 732.566 149.67 524.788c-18.352-18.352-48.105-18.353-66.462 0.004l-1.416 1.416c-18.354 18.354-18.356 48.11-0.004 66.462l241.99 241.99c9.294 9.294 21.513 13.882 33.694 13.762z"
        p-id="9084"
      ></path>
    </svg>
  )
}

export const BlockquoteIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M412 205.133c-4.348 0.158-7.873 0.343-10.556 0.554C254.344 217.24 140 340.351 140 488.805v279.04c0 28.72 23.281 52 52 52h168c28.719 0 52-23.28 52-52v-168c0-28.718-23.281-52-52-52H244v-59.04c0-89.924 66.33-165.709 154.528-178.21 3.508-0.497 7.982-0.907 13.472-1.24V205.132z m472 0c-4.348 0.158-7.873 0.343-10.556 0.554C726.344 217.24 612 340.351 612 488.805v279.04c0 28.72 23.281 52 52 52h168c28.719 0 52-23.28 52-52v-168c0-28.718-23.281-52-52-52H716v-59.04c0-89.924 66.33-165.709 154.528-178.21 3.508-0.497 7.982-0.907 13.472-1.24V205.132z"
        p-id="9084"
      ></path>
    </svg>
  )
}

export const UnorderedListIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M360 160h560a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H360a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8z m0 304h560a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H360a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8z m0 304h560a8 8 0 0 0 8 8v80a8 8 0 0 0-8 8H360a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8zM96 208a80 80 0 1 1 160 0 80 80 0 1 1-160 0z m0 304a80 80 0 1 1 160 0 80 80 0 1 1-160 0z m0 304a80 80 0 1 1 160 0 80 80 0 1 1-160 0z"
        p-id="9084"
      ></path>
    </svg>
  )
}

export const OrderedListIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M359.68 764h560.64c4.224 0 7.68 4.8 7.68 10.667v74.666c0 5.867-3.456 10.667-7.68 10.667H359.68c-4.224 0-7.68-4.8-7.68-10.667v-74.666c0-5.867 3.456-10.667 7.68-10.667z m0-600h560.64c4.224 0 7.68 4.8 7.68 10.667v74.666c0 5.867-3.456 10.667-7.68 10.667H359.68c-4.224 0-7.68-4.8-7.68-10.667v-74.666c0-5.867 3.456-10.667 7.68-10.667z m0 300h560.64c4.224 0 7.68 4.8 7.68 10.667v74.666c0 5.867-3.456 10.667-7.68 10.667H359.68c-4.224 0-7.68-4.8-7.68-10.667v-74.666c0-5.867 3.456-10.667 7.68-10.667zM172.384 728H99.968c-2.182 0-3.968 1.8-3.968 4v34c0 2.2 1.786 4 3.968 4h72.416v20.5h-35.712c-2.182 0-3.968 1.8-3.968 4v34c0 2.2 1.786 4 3.968 4h35.712V854H99.968c-2.182 0-3.968 1.8-3.968 4v34c0 2.2 1.786 4 3.968 4h116.064c2.182 0 3.968-1.8 3.968-4V732c0-2.2-1.786-4-3.968-4h-43.648zM142 296h40c2.2 0 4-1.8 4-4V136a8 8 0 0 1-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h38v120c0 2.2 1.8 4 4 4z m74.032 256h-68.448l70.333-77.7c1.29-1.5 2.083-3.4 2.083-5.4V432c0-2.2-1.786-4-3.968-4H99.968c-2.182 0-3.968 1.8-3.968 4v36c0 2.2 1.786 4 3.968 4h68.448l-70.333 77.7c-1.29 1.5-2.083 3.4-2.083 5.4V592c0 2.2 1.786 4 3.968 4h116.064c2.182 0 3.968-1.8 3.968-4v-36c0-2.2-1.786-4-3.968-4z"
        p-id="9352"
      ></path>
    </svg>
  )
}

export const TaskListIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M188 188v648h648V188H188z m-44-76h736c17.673 0 32 14.327 32 32v736c0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32z m472.227 254.26l-157.21 218.01-71.244-98.796a31.9 31.9 0 0 1-25.868-13.26h-46.907c-6.517 0-10.288 7.415-6.467 12.714L433.147 657.74c12.75 17.681 38.99 17.681 51.738 0L695.47 365.714c3.821-5.3 0.05-12.714-6.467-12.714h-46.907a31.9 31.9 0 0 1-25.868 13.26"
        p-id="9486"
      ></path>
    </svg>
  )
}

export const TableIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M945.08373333 93.85173333L78.91626667 93.85173333c-24.74378667 0-44.80170667 20.05685333-44.80170667 44.80064l0 746.69653334c0 24.74272 20.05792 44.80064 44.80170667 44.80064l866.16746666 0c24.74165333 0 44.80170667-20.05685333 44.80170667-44.80064L989.88586667 138.65173333C989.88586667 113.90826667 969.82506667 93.85173333 945.08373333 93.85173333ZM945.08373333 273.05706667l0 175.07733333-258.85546666 0L686.22826667 273.05706667l214.05226666 0L945.08373333 273.05706667ZM382.57173333 667.17226667L382.57173333 492.93546667l258.85546667 0 0 174.2368L382.57173333 667.17226667ZM641.42826667 711.9744l0 173.37386667L382.57173333 885.34826667 382.57173333 711.9744 641.42826667 711.9744ZM337.77066667 667.17226667l-258.85546667 0L78.9152 492.93546667l258.85546667 0L337.77066667 667.17226667ZM641.42826667 273.05706667l0 175.07733333L382.57173333 448.1344 382.57173333 273.05706667 641.42826667 273.05706667ZM686.22826667 492.93546667l258.85546666 0 0 174.2368-258.85546666 0L686.22826667 492.93546667ZM392.52906667 138.65173333c24.74378667 0 44.80170667 20.05685333 44.80170666 44.80277334 0 24.74272-20.05792 44.80064-44.80170666 44.80064s-44.80277333-20.05685333-44.80277334-44.80064C347.72586667 158.70933333 367.7856 138.65173333 392.52906667 138.65173333ZM258.12373333 138.65173333c24.74165333 0 44.80170667 20.05685333 44.80170667 44.80277334 0 24.74272-20.05898667 44.80064-44.80170667 44.80064-24.74496 0-44.80277333-20.05685333-44.80277333-44.80064C213.3216 158.70933333 233.3792 138.65173333 258.12373333 138.65173333ZM123.7184 138.65173333c24.74165333 0 44.80170667 20.05685333 44.80170667 44.80277334 0 24.74272-20.05898667 44.80064-44.80170667 44.80064-24.74496 0-44.80277333-20.05685333-44.80277333-44.80064C78.91626667 158.70933333 98.97386667 138.65173333 123.7184 138.65173333ZM123.7184 273.05706667l214.05226667 0 0 175.07733333-258.85546667 0L78.91626667 273.05706667 123.7184 273.05706667ZM78.91626667 711.9744l258.85546666 0 0 173.37386667-258.85546666 0L78.91626667 711.9744ZM686.22826667 885.34826667L686.22826667 711.9744l258.85546666 0 0 173.37386667L686.22826667 885.34826667Z"></path>
    </svg>
  )
}

export const TableSplitIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M248 474h136V188H188v124a8 8 0 0 0-8 8h-60a8 8 0 0 0-8-8V144c0-17.673 14.327-32 32-32h284c17.673 0 32 14.327 32 32v736c0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32V712a8 8 0 0 0 8-8h60a8 8 0 0 0 8 8v124h196V550H248v81.407c0 7.143-8.295 11.194-13.825 6.717L83.27 518.717c-4.36-3.412-4.36-10.022 0-13.434l150.905-119.407c5.636-4.477 13.825-0.426 13.825 6.717V474z m528 76H640v286h196V712a8 8 0 0 0 8-8h60a8 8 0 0 0 8 8v168c0 17.673-14.327 32-32 32H596c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32h284c17.673 0 32 14.327 32 32v168a8 8 0 0 0-8 8h-60a8 8 0 0 0-8-8V188H640v286h136v-81.407c0-7.143 8.189-11.194 13.825-6.717L940.73 505.283c4.36 3.412 4.36 10.022 0 13.434L789.825 638.124c-5.53 4.477-13.825 0.426-13.825-6.717V550z"></path>
    </svg>
  )
}

export const TableMergeIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M704 474h132V188H640v124a8 8 0 0 0-8 8h-60a8 8 0 0 0-8-8V144c0-17.673 14.327-32 32-32h284c17.673 0 32 14.327 32 32v736c0 17.673-14.327 32-32 32H596c-17.673 0-32-14.327-32-32V712a8 8 0 0 0 8-8h60a8 8 0 0 0 8 8v124h196V550H704v81.407c0 7.143-8.295 11.194-13.825 6.717L539.27 518.717c-4.36-3.412-4.36-10.022 0-13.434l150.905-119.407c5.636-4.477 13.825-0.426 13.825 6.717V474z m-384 76H188v286h196V712a8 8 0 0 0 8-8h60a8 8 0 0 0 8 8v168c0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32h284c17.673 0 32 14.327 32 32v168a8 8 0 0 0-8 8h-60a8 8 0 0 0-8-8V188H188v286h132v-81.407c0-7.143 8.189-11.194 13.825-6.717L484.73 505.283c4.36 3.412 4.36 10.022 0 13.434L333.825 638.124c-5.53 4.477-13.825 0.426-13.825-6.717V550z"></path>
    </svg>
  )
}

export const PlusCircleIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
    >
      <path
        d="M279.125333 101.077333a205.226667 205.226667 0 0 0-178.048 178.048C92.544 343.552 85.333333 424.192 85.333333 512c0 87.850667 7.253333 168.448 15.744 232.874667a205.226667 205.226667 0 0 0 178.048 178.048c64.426667 8.533333 145.066667 15.744 232.874667 15.744 87.850667 0 168.448-7.253333 232.874667-15.744a205.226667 205.226667 0 0 0 178.048-178.048c8.533333-64.426667 15.744-145.066667 15.744-232.874667 0-87.850667-7.253333-168.448-15.744-232.874667a205.226667 205.226667 0 0 0-178.048-178.048C680.448 92.544 599.808 85.333333 512 85.333333c-87.850667 0-168.448 7.253333-232.874667 15.744z"
        fill="currentColor"
      ></path>
      <path
        d="M512 725.333333a42.666667 42.666667 0 0 0 42.666667-42.666666v-128h128a42.666667 42.666667 0 1 0 0-85.333334h-128V341.333333a42.666667 42.666667 0 1 0-85.333334 0v128H341.333333a42.666667 42.666667 0 1 0 0 85.333334h128v128a42.666667 42.666667 0 0 0 42.666667 42.666666z"
        fill="#ffffff"
      ></path>
    </svg>
  )
}

export const PlusIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
    >
      <path
        fill="currentColor"
        d="M112 464c-26.51 0-48 21.49-48 48s21.49 48 48 48h352v352c0 26.51 21.49 48 48 48s48-21.49 48-48V560h352c26.51 0 48-21.49 48-48s-21.49-48-48-48H560V112c0-26.51-21.49-48-48-48s-48 21.49-48 48v352H112z"
      ></path>
    </svg>
  )
}

export const ArrowDownIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"></path>
    </svg>
  )
}

export const ArrowUpIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
    </svg>
  )
}

export const ArrowLeftIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
    </svg>
  )
}

export const ArrowRightIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"></path>
    </svg>
  )
}

export const ArrowCaretDownIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path
        d="M76.3 392.3l403.1 489.1c16.9 18.9 46.5 18.9 63.4 0l405.1-489.1c24.4-27.4 5-70.8-31.7-70.8H108.1c-36.8 0-56.3 43.4-31.8 70.8z"
        p-id="13314"
      />
    </svg>
  )
}

export const CutIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M891.257 825.643C901.373 835.76 894.26 853 880 853h-90.6a15.87 15.87 0 0 0-11.264-4.65L510.502 580.03l-80.334 80.601C441.812 683.161 448 708.151 448 734c0 88.318-71.682 160-160 160s-160-71.682-160-160 71.682-160 160-160c26.357 0 51.758 6.38 74.494 18.383l80.208-80.386-80.111-80.378C339.855 443.62 314.456 450 288.1 450c-88.318 0-160-71.682-160-160s71.682-160 160-160 160 71.682 160 160c0 25.848-6.188 50.84-17.832 73.369l80.334 80.6 267.559-268.243c2.93-3.072 7.092-4.726 11.339-4.726H880c14.245 0 21.285 17.33 11.264 27.35L578.4 512l312.857 313.643zM288 370c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80z m0 444c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80z"></path>
    </svg>
  )
}

export const CopyIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M236 701.999h140c23.196 0 42 18.804 42 42V884h242V268H236v433.999z m33.479 68L350 850.519V770h-80.521zM832 64c17.7 0 32 14.3 32 32v728c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8V136H296c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8h536zM704 192c17.673 0 32 14.327 32 32v704c0 17.673-14.327 32-32 32H365.255a32 32 0 0 0-22.628-9.373L169.373 777.373A32 32 0 0 0 160 754.745V224c0-17.673 14.327-32 32-32h512z"></path>
    </svg>
  )
}

export const PasteIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M789.24444445 332L789.24444445 182c0-16.5-13.5-30-30-30L549.24444445 152 549.24444445 92c0-33-27-60-60-60l-120 0c-33 0-60 27-60 60l0 60L99.24444445 152c-16.5 0-30 13.5-30 30l0 600c0 16.5 13.5 30 30 30l270 0 0 180 420 0 180-180L969.24444445 332 789.24444445 332zM369.24444445 92.12c0.03-0.03 0.06-0.06 0.12-0.12l119.79 0c0.03 0.03 0.09 0.06 0.12 0.12L489.24444445 152l-120 0L369.24444445 92.12zM189.24444445 272L189.24444445 212l480 0 0 60L189.24444445 272zM789.24444445 907.16L789.24444445 812l95.16 0L789.24444445 907.16zM909.24444445 752l-180 0 0 180L429.24444445 932 429.24444445 392l480 0L909.24444445 752z"></path>
    </svg>
  )
}

export const PasteTextIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M490.66666667 512l0 112.5 28.125 0 28.125-56.25 56.25 0 0 225-42.1875 0 0 56.25 196.875 0 0-56.25-42.1875 0 0-225 56.25 0 28.125 56.25 28.125 0 0-112.5zM771.91666667 343.25l0-140.625c0-15.46875-12.65625-28.125-28.125-28.125l-196.875 0 0-56.25c0-30.9375-25.3125-56.25-56.25-56.25l-112.5 0c-30.9375 0-56.25 25.3125-56.25 56.25l0 56.25-196.875 0c-15.46875 0-28.125 12.65625-28.125 28.125l0 562.5c0 15.46875 12.65625 28.125 28.125 28.125l253.125 0 0 168.75 562.5 0 0-618.75-168.75 0zM378.16666667 118.3625c0.028125-0.028125 0.05625-0.05625 0.1125-0.1125l112.303125 0c0.028125 0.028125 0.084375 0.05625 0.1125 0.1125l0 56.1375-112.5 0 0-56.1375zM209.41666667 287l0-56.25 450 0 0 56.25-450 0zM884.41666667 905.75l-450 0 0-506.25 450 0 0 506.25z"></path>
    </svg>
  )
}

export const DragIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M290 196c54.124 0 98-43.876 98-98S344.124 0 290 0s-98 43.876-98 98 43.876 98 98 98z m0 414c54.124 0 98-43.876 98-98s-43.876-98-98-98-98 43.876-98 98 43.876 98 98 98z m0 414c54.124 0 98-43.876 98-98s-43.876-98-98-98-98 43.876-98 98 43.876 98 98 98z m444-828c54.124 0 98-43.876 98-98S788.124 0 734 0s-98 43.876-98 98 43.876 98 98 98z m0 414c54.124 0 98-43.876 98-98s-43.876-98-98-98-98 43.876-98 98 43.876 98 98 98z m0 414c54.124 0 98-43.876 98-98s-43.876-98-98-98-98 43.876-98 98 43.876 98 98 98z"></path>
    </svg>
  )
}

export const MenuIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
    </svg>
  )
}

export const RedoIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M744 321v103.124c0 9.04 10.517 14.168 17.528 8.501l191.326-151.124c5.528-4.318 5.528-12.684 0-17.002L761.528 113.375c-7.146-5.667-17.528-0.54-17.528 8.5V225H411C221.014 225 67 379.014 67 569s154.014 344 344 344h154.272a8 8 0 0 1 8-8v-80a8 8 0 0 1-8-8H411c-136.967 0-248-111.033-248-248 0-136.967 111.033-248 248-248h333z"></path>
    </svg>
  )
}

export const UndoIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M280 321v103.124c0 9.04-10.517 14.168-17.528 8.501L71.146 281.501c-5.528-4.318-5.528-12.684 0-17.002l191.326-151.124c7.146-5.667 17.528-0.54 17.528 8.5V225h333c189.986 0 344 154.014 344 344S802.986 913 613 913H458.728a8 8 0 0 0-8-8v-80a8 8 0 0 0 8-8H613c136.967 0 248-111.033 248-248 0-136.967-111.033-248-248-248H280z"></path>
    </svg>
  )
}

export const LoadingIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => {
  return (
    <span tw="animate-spin">
      <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em" fill="currentColor">
        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
  )
}

const ICON_LIST = {
  bold: BoldIcon,
  italic: ItalicIcon,
  underline: UnderlineIcon,
  strikethrough: StrikethroughIcon,
  code: CodeIcon,
  sub: SubIcon,
  sup: SupIcon,
  check: CheckIcon,
  blockquote: BlockquoteIcon,
  unorderedList: UnorderedListIcon,
  orderedList: OrderedListIcon,
  taskList: TaskListIcon,
  table: TableIcon,
  tableMerge: TableMergeIcon,
  tableSplit: TableSplitIcon,
  plus: PlusIcon,
  plusCircle: PlusCircleIcon,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowCaretDown: ArrowCaretDownIcon,
  copy: CopyIcon,
  cut: CutIcon,
  paste: PasteIcon,
  pasteText: PasteTextIcon,
  drag: DragIcon,
  menu: MenuIcon,
  redo: RedoIcon,
  undo: UndoIcon,
  loading: LoadingIcon,
}

const IconStyles = tw.span`overflow-hidden inline-flex
  [> svg]:align-middle
  `

export const Icon: React.FC<
  React.HTMLAttributes<SVGSVGElement> & Record<'name', keyof typeof ICON_LIST>
> = ({ name, className, ...props }) => {
  const IconComponent = ICON_LIST[name]

  return (
    <IconStyles className={className}>
      <IconComponent {...props} />
    </IconStyles>
  )
}
