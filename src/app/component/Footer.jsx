import Link from "next/link";

const footerLinks = [
  "Contact",
  "Mentions légales",
  "Vie Privée et Données Personnelles",
  "Politique des cookies",
  "Entreprise",
  "Today",
  "Nos publications",
  "Plan du site",
  "Annuaire",
  "Accessibilité : conformité partielle",
  "Code de Conduite",
  "© Entreprise 2004-2024 - Tous droits réservés",
];

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white text-center p-2">
        <div className="flex justify-center">
          <svg
            width="88"
            height="41"
            viewBox="0 0 88 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.4057 11.5712C30.5895 10.8603 28.6556 10.4972 26.7051 10.501C22.3338 10.501 19.2656 13.4237 19.2656 18.0286C19.2656 22.6859 21.9277 25.5562 26.6461 25.5562C28.6249 25.5697 30.5854 25.1765 32.4057 24.4009C32.6384 24.3161 32.836 24.156 32.9671 23.9461C33.0982 23.7361 33.1553 23.4884 33.1294 23.2423V12.7298C33.1294 12.0622 32.8707 11.7447 32.4057 11.5712ZM29.3671 21.0298C29.3671 21.4651 29.1346 21.668 28.6435 21.812C28.0047 21.9937 27.3429 22.0819 26.6788 22.0739C24.8255 22.0739 23.077 20.9742 23.077 18.0221C23.077 15.0699 24.8124 13.9735 26.6788 13.9735C27.3428 13.9644 28.0045 14.0515 28.6435 14.2321C29.1346 14.3761 29.3671 14.579 29.3671 15.0143V21.0298Z"
              fill="white"
            />
            <path
              d="M8.03447 15.3338C8.03447 14.4501 8.93163 13.8871 10.4673 13.8871C11.9441 13.8871 13.3619 14.3781 14.8386 15.1963C14.9694 15.2735 15.119 15.3132 15.2709 15.3109C15.4062 15.3091 15.5386 15.2707 15.6539 15.1999C15.7692 15.129 15.8631 15.0282 15.9257 14.9083L16.8229 12.9969C16.8961 12.8434 16.9352 12.676 16.9375 12.506C16.9378 12.387 16.9056 12.2702 16.8445 12.1681C16.7833 12.0661 16.6955 11.9826 16.5904 11.9267C14.76 10.9048 12.6948 10.3769 10.5983 10.395C6.72143 10.395 4.23291 12.4765 4.23291 15.6022C4.23291 21.7355 13.5518 19.3594 13.5518 23.6141C13.5549 23.9781 13.4962 24.34 13.3783 24.6844C13.3607 24.7406 13.3508 24.7989 13.3488 24.8578C13.346 24.9144 13.3556 24.9709 13.3769 25.0234C13.3983 25.0759 13.4308 25.1232 13.4723 25.1618C13.5137 25.2004 13.5631 25.2296 13.617 25.2472C13.6709 25.2647 13.728 25.2704 13.7843 25.2636H16.3874C16.8229 25.2636 16.9964 25.1196 17.1405 24.6844C17.3015 24.154 17.38 23.6021 17.373 23.0479C17.3567 16.4629 8.03447 18.0437 8.03447 15.3338Z"
              fill="white"
            />
            <path
              d="M43.2007 10.501C41.2161 10.5146 39.2483 10.8666 37.3821 11.5417C37.1495 11.6265 36.9519 11.7866 36.8208 11.9966C36.6897 12.2065 36.6325 12.4542 36.6585 12.7003V24.6758C36.6537 24.7531 36.6654 24.8305 36.6928 24.903C36.7203 24.9754 36.7628 25.0412 36.8176 25.096C36.8724 25.1508 36.9382 25.1933 37.0107 25.2207C37.0832 25.2482 37.1607 25.2599 37.238 25.2551H39.8575C39.9349 25.2599 40.0124 25.2482 40.0849 25.2207C40.1574 25.1933 40.2232 25.1508 40.278 25.096C40.3328 25.0412 40.3753 24.9754 40.4028 24.903C40.4302 24.8305 40.4419 24.7531 40.4371 24.6758V14.9554C40.4371 14.5233 40.6663 14.3204 41.1313 14.2026C41.832 14.033 42.552 13.956 43.2727 13.9735C44.8346 13.9735 46.0789 14.6968 46.0789 16.4314V24.6758C46.0741 24.7531 46.0858 24.8305 46.1132 24.903C46.1407 24.9754 46.1832 25.0412 46.238 25.096C46.2928 25.1508 46.3586 25.1933 46.4311 25.2207C46.5036 25.2482 46.5811 25.2599 46.6584 25.2551H49.278C49.355 25.2594 49.4322 25.2473 49.5043 25.2197C49.5764 25.192 49.6418 25.1494 49.6962 25.0947C49.7507 25.04 49.7929 24.9744 49.8201 24.9022C49.8474 24.83 49.859 24.7528 49.8543 24.6758V15.9405C49.8281 12.4091 47.6572 10.501 43.2007 10.501Z"
              fill="white"
            />
            <path
              d="M59.7858 10.501C55.444 10.501 52.6084 13.6527 52.6084 18.0286C52.6084 22.4044 55.444 25.5562 59.9888 25.5562C64.3307 25.5562 67.1663 22.4044 67.1663 18.0286C67.1663 13.6527 64.3307 10.501 59.7858 10.501ZM59.9888 22.0738C57.8474 22.0738 56.4296 20.6829 56.4296 18.022C56.4296 15.3612 57.8474 13.9735 59.7858 13.9735C61.9273 13.9735 63.3451 15.3612 63.3451 18.022C63.3451 20.6829 61.9273 22.0738 59.9888 22.0738Z"
              fill="white"
            />
            <path
              d="M83.2862 10.7881H80.6831C80.363 10.7881 80.1035 11.0474 80.1035 11.3674V24.6749C80.1035 24.9948 80.363 25.2542 80.6831 25.2542H83.2862C83.6063 25.2542 83.8658 24.9948 83.8658 24.6749V11.3674C83.8658 11.0474 83.6063 10.7881 83.2862 10.7881Z"
              fill="white"
            />
            <path
              d="M77.7294 5.2062C77.1329 5.06553 76.5216 4.9974 75.9088 5.00328C72.307 5.00328 69.9756 6.91464 69.9756 11.081V24.6765C69.9709 24.7535 69.9825 24.8307 70.0098 24.9029C70.037 24.9751 70.0792 25.0407 70.1337 25.0954C70.1881 25.1502 70.2535 25.1928 70.3256 25.2204C70.3977 25.248 70.4748 25.2601 70.5519 25.2558H73.1289C73.2062 25.2606 73.2837 25.2489 73.3562 25.2214C73.4287 25.194 73.4945 25.1515 73.5493 25.0967C73.6041 25.042 73.6467 24.9762 73.6741 24.9037C73.7015 24.8313 73.7132 24.7538 73.7084 24.6765V13.9742H77.3823C77.4602 13.9812 77.5387 13.9711 77.6122 13.9445C77.6857 13.9178 77.7524 13.8754 77.8077 13.8201C77.863 13.7648 77.9054 13.6981 77.9321 13.6246C77.9587 13.5512 77.9689 13.4727 77.9619 13.3949V11.3985C77.9718 11.3187 77.9639 11.2377 77.9387 11.1614C77.9135 11.085 77.8717 11.0152 77.8162 10.957C77.7608 10.8988 77.6931 10.8535 77.6181 10.8246C77.543 10.7957 77.4625 10.7838 77.3823 10.7897H73.7084V10.4624C73.7084 8.87181 74.4026 8.06013 76.0005 8.06013C76.5801 8.06013 77.2022 8.20741 77.4183 8.20741C77.7654 8.20741 77.9095 8.0045 77.9684 7.65757L78.2598 6.15206C78.2888 6.02836 78.3074 5.90246 78.3155 5.77568C78.309 5.46475 78.1354 5.29457 77.7294 5.2062Z"
              fill="white"
            />
            <path
              d="M5.96463 21.5566C4.7793 21.5566 4 22.3061 4 23.5497C4 24.7934 4.78259 25.5462 6.05632 25.5462C7.24165 25.5462 8.02096 24.7672 8.02096 23.5497C8.02096 22.3322 7.23837 21.5566 5.96463 21.5566Z"
              fill="white"
            />
            <path
              d="M81.9436 5.00977C80.755 5.00977 79.979 5.76253 79.979 7.00622C79.979 8.24991 80.7616 9.00266 82.0353 9.00266C83.2207 9.00266 84 8.22046 84 7.00622C84 5.79199 83.2141 5.00977 81.9436 5.00977Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <div className="font-bold my-2">Suivez nous</div>
          <div className="flex gap-4 justify-around flex-wrap">
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <g clip-path="url(#clip0_1_1423)">
                <path
                  d="M15.3604 27.9803H11.8774V16.764H15.3604V27.9803ZM13.617 15.234C12.5032 15.234 11.5999 14.3115 11.5999 13.1978C11.5999 12.6628 11.8124 12.1498 12.1907 11.7715C12.5689 11.3932 13.082 11.1807 13.617 11.1807C14.152 11.1807 14.665 11.3932 15.0433 11.7715C15.4216 12.1498 15.6341 12.6628 15.6341 13.1978C15.6341 14.3115 14.7304 15.234 13.617 15.234ZM28.3961 27.9803H24.9206V22.5203C24.9206 21.219 24.8944 19.5503 23.1097 19.5503C21.2989 19.5503 21.0214 20.964 21.0214 22.4265V27.9803H17.5421V16.764H20.8826V18.294H20.9314C21.3964 17.4128 22.5322 16.4828 24.2269 16.4828C27.7519 16.4828 28.3999 18.804 28.3999 21.819V27.9803H28.3961Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1423">
                  <rect
                    width="19.2"
                    height="19.2"
                    fill="white"
                    transform="translate(10.3999 11.1807)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <path
                d="M24.9948 12.9805H27.6423L21.8598 19.588L28.6623 28.5805H23.3373L19.1635 23.128L14.3935 28.5805H11.7423L17.926 21.5117L11.4048 12.9805H16.8648L20.6335 17.9642L24.9948 12.9805ZM24.0648 26.998H25.531L16.066 14.4805H14.491L24.0648 26.998Z"
                fill="white"
              />
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <path
                d="M20.0037 16.4681C17.6187 16.4681 15.695 18.3918 15.695 20.7768C15.695 23.1618 17.6187 25.0856 20.0037 25.0856C22.3887 25.0856 24.3125 23.1618 24.3125 20.7768C24.3125 18.3918 22.3887 16.4681 20.0037 16.4681ZM20.0037 23.5781C18.4625 23.5781 17.2025 22.3218 17.2025 20.7768C17.2025 19.2318 18.4587 17.9756 20.0037 17.9756C21.5487 17.9756 22.805 19.2318 22.805 20.7768C22.805 22.3218 21.545 23.5781 20.0037 23.5781ZM25.4937 16.2918C25.4937 16.8506 25.0437 17.2968 24.4887 17.2968C23.93 17.2968 23.4837 16.8468 23.4837 16.2918C23.4837 15.7368 23.9337 15.2868 24.4887 15.2868C25.0437 15.2868 25.4937 15.7368 25.4937 16.2918ZM28.3475 17.3118C28.2837 15.9656 27.9762 14.7731 26.99 13.7906C26.0075 12.8081 24.815 12.5006 23.4687 12.4331C22.0812 12.3543 17.9225 12.3543 16.535 12.4331C15.1925 12.4968 14 12.8043 13.0137 13.7868C12.0275 14.7693 11.7237 15.9618 11.6562 17.3081C11.5775 18.6956 11.5775 22.8543 11.6562 24.2418C11.72 25.5881 12.0275 26.7806 13.0137 27.7631C14 28.7456 15.1887 29.0531 16.535 29.1206C17.9225 29.1993 22.0812 29.1993 23.4687 29.1206C24.815 29.0568 26.0075 28.7493 26.99 27.7631C27.9725 26.7806 28.28 25.5881 28.3475 24.2418C28.4262 22.8543 28.4262 18.6993 28.3475 17.3118ZM26.555 25.7306C26.2625 26.4656 25.6962 27.0318 24.9575 27.3281C23.8512 27.7668 21.2262 27.6656 20.0037 27.6656C18.7812 27.6656 16.1525 27.7631 15.05 27.3281C14.315 27.0356 13.7487 26.4693 13.4525 25.7306C13.0137 24.6243 13.115 21.9993 13.115 20.7768C13.115 19.5543 13.0175 16.9256 13.4525 15.8231C13.745 15.0881 14.3112 14.5218 15.05 14.2256C16.1562 13.7868 18.7812 13.8881 20.0037 13.8881C21.2262 13.8881 23.855 13.7906 24.9575 14.2256C25.6925 14.5181 26.2587 15.0843 26.555 15.8231C26.9937 16.9293 26.8925 19.5543 26.8925 20.7768C26.8925 21.9993 26.9937 24.6281 26.555 25.7306Z"
                fill="white"
              />
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <g clip-path="url(#clip0_1_1432)">
                <path
                  d="M24.4678 21.9807L25.001 18.5059H21.6669V16.251C21.6669 15.3004 22.1326 14.3738 23.6259 14.3738H25.1416V11.4154C25.1416 11.4154 23.7661 11.1807 22.451 11.1807C19.7053 11.1807 17.9105 12.8449 17.9105 15.8577V18.5059H14.8584V21.9807H17.9105V30.3807H21.6669V21.9807H24.4678Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1432">
                  <rect
                    width="19.2"
                    height="19.2"
                    fill="white"
                    transform="translate(10.3999 11.1807)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <g clip-path="url(#clip0_1_1435)">
                <path
                  d="M28.3999 19.0523C26.7489 19.0562 25.1385 18.5414 23.796 17.5804V24.2824C23.7955 25.5237 23.4161 26.7353 22.7085 27.7551C22.0009 28.7749 20.9988 29.5544 19.8362 29.9894C18.6736 30.4243 17.406 30.4939 16.2027 30.189C14.9995 29.884 13.918 29.2189 13.103 28.2827C12.2879 27.3465 11.7781 26.1838 11.6417 24.9501C11.5052 23.7163 11.7487 22.4703 12.3396 21.3787C12.9304 20.287 13.8405 19.4018 14.948 18.8413C16.0556 18.2808 17.3078 18.0718 18.5374 18.2423V21.6132C17.9747 21.4362 17.3706 21.4415 16.8111 21.6284C16.2517 21.8153 15.7657 22.1741 15.4223 22.6537C15.079 23.1333 14.8961 23.7092 14.8995 24.299C14.903 24.8888 15.0928 25.4624 15.4417 25.9379C15.7906 26.4134 16.2809 26.7665 16.8425 26.9468C17.4041 27.1271 18.0082 27.1253 18.5688 26.9417C19.1293 26.7581 19.6174 26.4021 19.9635 25.9245C20.3097 25.447 20.496 24.8722 20.496 24.2824V11.1807H23.796C23.7937 11.4593 23.817 11.7376 23.8657 12.012C23.9804 12.6246 24.2188 13.2073 24.5664 13.7246C24.9141 14.2418 25.3635 14.6827 25.8874 15.0203C26.6326 15.5131 27.5064 15.7757 28.3999 15.7755V19.0523Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1435">
                  <rect
                    width="19.2"
                    height="19.2"
                    fill="white"
                    transform="translate(10.3999 11.1807)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <g clip-path="url(#clip0_1_1438)">
                <path
                  d="M28.7218 16.3836C28.5124 15.5953 27.8955 14.9744 27.1123 14.7637C25.6926 14.3809 19.9999 14.3809 19.9999 14.3809C19.9999 14.3809 14.3073 14.3809 12.8876 14.7637C12.1043 14.9745 11.4875 15.5953 11.2781 16.3836C10.8977 17.8125 10.8977 20.7938 10.8977 20.7938C10.8977 20.7938 10.8977 23.7751 11.2781 25.204C11.4875 25.9923 12.1043 26.5873 12.8876 26.798C14.3073 27.1809 19.9999 27.1809 19.9999 27.1809C19.9999 27.1809 25.6926 27.1809 27.1123 26.798C27.8955 26.5873 28.5124 25.9923 28.7218 25.204C29.1022 23.7751 29.1022 20.7938 29.1022 20.7938C29.1022 20.7938 29.1022 17.8125 28.7218 16.3836ZM18.1381 23.5006V18.087L22.8961 20.7939L18.1381 23.5006Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1438">
                  <rect
                    width="19.2"
                    height="19.2"
                    fill="white"
                    transform="translate(10.3999 11.1807)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="1.28027"
                width="39"
                height="39"
                rx="19.5"
                stroke="white"
              />
              <path
                d="M11.5999 13.5809C11.5999 12.9171 12.1361 12.3809 12.7999 12.3809C21.4174 12.3809 28.3999 19.3634 28.3999 27.9809C28.3999 28.6446 27.8636 29.1809 27.1999 29.1809C26.5361 29.1809 25.9999 28.6446 25.9999 27.9809C25.9999 20.6909 20.0899 14.7809 12.7999 14.7809C12.1361 14.7809 11.5999 14.2446 11.5999 13.5809ZM16.3999 26.7809C16.3999 28.1046 15.3236 29.1809 13.9999 29.1809C12.6761 29.1809 11.5999 28.1046 11.5999 26.7809C11.5999 25.4571 12.6761 24.3809 13.9999 24.3809C15.3236 24.3809 16.3999 25.4571 16.3999 26.7809ZM12.7999 17.1809C18.7661 17.1809 23.5999 22.0146 23.5999 27.9809C23.5999 28.6446 23.0636 29.1809 22.3999 29.1809C21.7361 29.1809 21.1999 28.6446 21.1999 27.9809C21.1999 23.3421 17.4386 19.5809 12.7999 19.5809C12.1361 19.5809 11.5999 19.0446 11.5999 18.3809C11.5999 17.7171 12.1361 17.1809 12.7999 17.1809Z"
                fill="white"
              />
            </svg>
          </div>
          <Link
            href={"#"}
            className="flex justify-center items-center gap-2 my-2">
            Haut de la page
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3374 2.33301C10.8687 1.86426 10.1074 1.86426 9.63867 2.33301L3.63867 8.33301C3.16992 8.80176 3.16992 9.56301 3.63867 10.0318C4.10742 10.5005 4.86867 10.5005 5.33742 10.0318L9.28992 6.07551V17.5805C9.28992 18.2443 9.82617 18.7805 10.4899 18.7805C11.1537 18.7805 11.6899 18.2443 11.6899 17.5805V6.07551L15.6424 10.028C16.1112 10.4968 16.8724 10.4968 17.3412 10.028C17.8099 9.55926 17.8099 8.79801 17.3412 8.32926L11.3412 2.32926L11.3374 2.33301Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="p-4">
        {footerLinks.map((d) => (
          <p key={d} className="py-2">
            {d}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
