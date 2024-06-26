const services = [
  {
    title: "Website Development",
    description:
      "We craft websites that reflect your unique brand and personality, helping you attract more clients and increase visibility.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M2 11.5v-1h3v1zm3.054 5.666l-.708-.72l2.1-2.1l.72.708zm1.392-9.512l-2.1-2.1l.708-.72l2.112 2.112zM16.962 18.5l-4.443-4.442l-.942 2.903l-2.193-7.23l7.308 2.192l-2.892 1.03l4.354 4.355zM10.116 6V3h1v3zm4.669 1.654l-.72-.708l2.112-2.111l.708.707z" />
  </svg>`,
  },
  {
    title: "Custom Web Apps",
    description:
      "We can help you turn your ideas into fully functioning software.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M5.346 19.5v-7.115h-2v-1h5v1h-2V19.5zm0-10.885V4.5h1v4.116zm4.154 0v-1h2V4.5h1v3.116h2v1zm2 10.885v-8.115h1V19.5zm6.154 0v-3.116h-2v-1h5v1h-2V19.5zm0-6.884V4.5h1v8.116z" />
  </svg>`,
  },
  {
    title: "Domain Management",
    description:
      "Once we have your custom domain and email address up and running, we can help you manage it and keep it secure.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M3 19V5h18v14zm1-1h16V8H4zm6.95-2.18l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM4 18V6z" />
  </svg>`,
  },
  {
    title: "AI Chatbots",
    description:
      "Experience the future of customer service with AI chatbots that can help you engage with your customers 24/7.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M5 20v-4.043q0-.667.475-1.139q.474-.472 1.14-.472h10.77q.666 0 1.14.475T19 15.96V20zm4.289-7.423q-1.78 0-3.035-1.255Q5 10.068 5 8.29t1.254-3.035T9.29 4h5.423q1.78 0 3.034 1.254T19 8.29t-1.254 3.034t-3.034 1.254zM6 19h12v-3.038q0-.27-.173-.443t-.442-.173H6.615q-.269 0-.442.173T6 15.962zm3.289-7.423h5.422q1.385 0 2.337-.952T18 8.289t-.952-2.337T14.712 5H9.289q-1.385 0-2.337.952T6 8.289t.952 2.336t2.337.952m-.001-2.558q.31 0 .52-.21t.211-.52t-.21-.52t-.52-.211t-.52.21t-.211.52t.21.52t.52.211m5.423 0q.31 0 .52-.21t.211-.52t-.21-.52t-.52-.211t-.52.21t-.211.52t.21.52t.52.211M12 8.29" />
  </svg>`,
  },
  {
    title: "SEO",
    description:
      "Be found on Google! We help you outline a strategy so that you rank higher in search results with your brand new website",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M3 20.077V4.616q0-.691.463-1.153T4.615 3H14.6q-.061.25-.071.49t-.006.51H4.616q-.231 0-.424.192T4 4.615v13.03L5.65 16h13.735q.23 0 .423-.192t.192-.423V8.342q.287-.067.527-.155q.24-.087.473-.225v7.423q0 .69-.462 1.153T19.385 17H6.077zM4 4.616v12.769V4zm15 1.846q-1.038 0-1.77-.731t-.73-1.77t.73-1.769t1.77-.73t1.77.73t.73 1.77t-.73 1.769t-1.77.73" />
  </svg>`,
  },

  {
    title: "Automation",
    description:
      "You can automatise most of your business processes, saving time and money in the long run. Let us show you how!",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
    <path fill="black" d="M5.5 12.05q0 .477.07.96q.068.484.232.956q.067.213-.015.408t-.266.274q-.188.085-.383.009t-.263-.29q-.2-.555-.288-1.146T4.5 12.05q0-3.139 2.19-5.344T12 4.5h1.387L11.64 2.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l2.388 2.389q.243.242.243.565t-.242.566l-2.389 2.388q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L13.387 5.5H12q-2.711 0-4.606 1.907T5.5 12.05m13-.1q0-.477-.07-.96q-.068-.484-.232-.955q-.067-.214.016-.409t.265-.274q.188-.085.374-.009q.185.076.253.29q.2.556.297 1.146t.097 1.171q0 3.139-2.19 5.344T12 19.5h-1.386l1.745 1.746q.141.14.15.345q.01.203-.15.363q-.159.16-.353.16t-.354-.16l-2.388-2.389Q9.02 19.324 9.02 19t.242-.565l2.389-2.389q.14-.14.344-.15t.364.15t.16.354t-.16.354L10.614 18.5H12q2.712 0 4.606-1.907T18.5 11.95" />
  </svg>`,
  },
];

export { services };
