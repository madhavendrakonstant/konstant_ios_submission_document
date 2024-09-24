const questions = [
    {
      title: 'App information',
      key: 't1',
      data: [
        {
          id: 'a01',
          Question : 'Company Name',
          fieldType: 'text',
          required: true,
          validity: 'name',
          info: 'The company name you specify will be displayed with your app on the App Store. For example, in the above iTunes Connect window, the name Apple is the company name. Your company name will appear in this spot and in the upper-left corner of your product page in the App Store. Your company name is a key piece of organizational metadata for your apps on the App Store. When users click the name, they arrive at a page containing all currently live apps sent through your developer account. '
        },
        {
          id: 'a02',
          Question : 'Default Language',
          fieldType: 'selectbar',
          placeholder: 'Please select..',
          limit: 1,
          required: true,
          info: ' The primary language you will be using to enter app details for display on the App Store.',
          select_options: [
            'English', 
            'French',
            'Spenish' 
          ]
        
        },
        {
          id: 'a03',
          Question : 'App Name',
          fieldType: 'text',
          required: true,
          validity: 'name',
          info: 'The name of your app as it will appear on the App Store. Note that this name cannot be longer than 255 bytes.'
        },
        {
          id: 'a04',
          Question : 'SKU Number',
          fieldType: 'text',
          required: true,
          info: 'A unique ID for your app. You can use letters, numbers, hyphens, periods, and underscores. The SKU cannot start with a hyphen, period, or underscore.'
        },
        {
          id: 'a05',
          Question : 'Bundle ID',
          fieldType: 'text',
          placeholder: 'type bundle id..',
          info: 'An identifier used by iOS and Mac OS X to recognize any future updates to your app. Your Bundle ID must be registered with Apple and unique to your app. Bundle IDs are app-type specific (either iOS or Mac OS X). The same Bundle ID cannot be used for both iOS and Mac OS X apps.',
          limit: 5,
          required: false
        },
        {
          id: 'a06',
          Question : 'Availability Date',
          fieldType: 'date',
          required: true,
          info: 'The date your app will become available on the App Store. '
        },
        {
          id: 'a07',
          Question : 'Price for your application',
          fieldType: 'text',
          validity: 'number',
          required: true,
          placeholder: 'add pricing',
        },
        {
          id: 'a08',
          Question : 'Version Number',
          fieldType: 'text',
          validity: 'version',
          required: true,
          placeholder: 'add version number',
          info: 'The version number of the app you are adding. Numbering should follow typical software versioning conventions (for example, 1.0 or 1.0.1 or 1.1).'
        },
        {
          id: 'a09',
          Question : 'Copyright',
          fieldType: 'text',
          validity: 'name',
          required: true,
          placeholder: 'add copyright',
          info: 'The name of the person or entity that owns the exclusive rights to the app, preceded by the year the rights were obtained (for example, "2008 Acme Inc.")'
        },
        {
          id: 'a010',
          Question : 'Primary Category',
          fieldType: 'selectbar',
          placeholder: 'Select category..',
          info: 'The category that best describes the app you are adding. Here is the listing of primary categories',
          select_options: [
            'Book',
            'Business',
            'Education',
            'Entertainment',
            'Finance',
            'Games',
            'Healthcare & Fitness',
            'Lifestyle',
            'Medical',
            'Music',
            'Navigation',
            'News',
            'Photography',
            'Reference',
            'Social Networking',
            'Sports',
            'Travel',
            'Utilities',
            'Weather'
        ],
          limit: 1,
          required: true
        },
        {
          id: 'a011',
          Question : 'Secondary Category',
          fieldType: 'selectbar',
          placeholder: 'Select Category..',
          info: 'An additional category that further describes the app you are adding. Here is the listing to secondary categories',
          select_options: [
            'Book',
            'Business',
            'Education',
            'Entertainment',
            'Finance',
            'Games',
            'Healthcare & Fitness',
            'Lifestyle',
            'Medical',
            'Music',
            'Navigation',
            'News',
            'Photography',
            'Reference',
            'Social Networking',
            'Sports',
            'Travel',
            'Utilities',
            'Weather'
        ],
          limit: 1,
          required: true
        },

      ]
    },
    {
      title: 'Content raiting',
      key: 't2',
      data: [
        {
          id: 'a12',
          Question : 'Select content raiting',
          fieldType: 'table-selection',
          required: true,
          info: 'Mention what applicable for the application .',
          content_description: [
            "Cartoon or Fantasy Violence",
            "Realistic Violence",
            "Sexual Content or Nudity",
            "Profanity or Crude Humor",
            "Alcohol, Tobacco, or Drug Use or References",
            "Mature/Suggestive Themes",
            "Simulated Gambling",
            "Horror/Fear Themes",
            "Prolonged Graphic or Sadistic Realistic Violence",
            "Graphic Sexual Content and Nudity"
          ],
          level: [
            'None',
            'Mild',
            'Intense'
          ]
        
        }
      ]

    },

    {
      title: 'Metadata',
      key: 't3',
      data: [
        {
          id: 'a13',
          Question : 'Description',
          fieldType: 'text',
          placeholder: 'Please add description..',
          required: true,
          info: 'A description of the app you are adding, detailing features and functionality. Descriptions cannot be longer than 4000 characters.',
        
        },
        {
          id: 'a14',
          Question : 'Keywords',
          fieldType: 'multi-text',
          placeholder: 'please add keywords..',
          info: 'One or more keywords that describe the app you are adding. When users search the App Store, the terms they enter are matched with keywords to return more accurate results. Separate multiple keywords with commas. Keywords cannot be edited once your binary is in review and cannot be longer than 100 bytes.',
          suggestions: [
            'Book',
            'Business',
            'Education',
            'Entertainment',
            'Finance',
            'Games',
            'Healthcare & Fitness',
            'Lifestyle',
            'Medical',
            'Music',
            'Navigation',
            'News',
            'Photography',
            'Reference',
            'Social Networking',
            'Sports',
            'Travel',
            'Utilities',
            'Weather'
        ],
          limit: 5,
          required: true,
          validity: 'keyword',
        },
        {
          id: 'a15',
          Question : 'Support URL',
          validity: 'url',
          fieldType: 'text',
          placeholder: 'please add url..',
          required: true,
          info: 'A URL that provides support for the app you are adding. This will be visible to customers on the App Store. '
        },
        {
          id: 'a16',
          Question : 'Marketing URL',
          validity: 'url',
          fieldType: 'text',
          placeholder: 'please add url..',
          required: true,
          info: 'A URL with information about the app you are adding. If provided, this will be visible to customers on the App Store. '
        },
        {
          id: 'a17',
          Question : 'Privacy Policy URL',
          validity: 'url',
          fieldType: 'text',
          placeholder: 'please add url..',
          required: true,
          info: 'A URL that links to your company\'s privacy policy. Privacy policies are recommended for all apps collecting user or device related data, and required for apps that offer auto-renewable or free subscriptions, or as otherwise required by law.  '
        },
      ]

    },
    {
      title: 'App review information',
      key: 't4',
      data: [
        {
          id: 'a18',
          Question : 'First Name',
          validity: 'name',
          fieldType: 'text',
          placeholder: 'Please add first name..',
          required: true,

        
        },
        {
          id: 'a19',
          Question : 'Last Name',
          validity: 'name',
          fieldType: 'text',
          placeholder: 'Please add last name..',
          required: true,

        },
        {
          id: 'a20',
          Question : 'Email Address',
          validity: 'email',
          fieldType: 'text',
          placeholder: 'Please add Email Address..',
          required: true,
        },
        {
          id: 'a21',
          Question : 'Phone Number',
          fieldType: 'text',
          placeholder: 'Please add Phone Number..',
          validity: 'number',
          required: true,
        },
        {
          id: 'a22',
          Question : 'Review Notes',
          fieldType: 'text',
          placeholder: 'Review Notes..',
          required: true,
        },
      ]

    },
    {
      title: 'Demo Account Information',
      key: 't5',
      data: [
        {
          id: 'a23',
          Question : 'Username',
          fieldType: 'text',
          placeholder: '',
          required: true,
          info: 'The username and password for a full-access account. This account is used during the app review process and must not expire. Details for additional accounts should be included in the Review Notes field.',
        },
        {
          id: 'a24',
          Question : 'Password',
          fieldType: 'password',
          placeholder: '',
          required: true,
          info: 'The username and password for a full-access account. This account is used during the app review process and must not expire. Details for additional accounts should be included in the Review Notes field.',
        }

      ]
    },

    {
      title: 'Uploads',
      key: 't4',
      data: [
        {
          id: 'a25',
          Question : 'Large app icon',
          fieldType: 'image',
          required: true,
          info: 'A large version of your app icon that will be used on the App Store. It must be at least 72 DPI, in the RGB color space, and 1024 x 1024 pixels (it cannot be scaled up). The file type must be .jpeg, .jpg, .tif, .tiff, or .png. It must be flat artwork without rounded corners.',
        },
        {
          id: 'a26',
          Question : '3.5 Inch Retina Screenshots',
          fieldType: 'image',
          required: true,
          info: 'Screenshots for 3.5-inch iPhone and iPod touch Retina display must be 960x640, 960x600, 640x960 or 640x920 pixels, at least 72 DPI, in the RGB color space, and in the JPG or PNG format.',
        },
        {
          id: 'a27',
          Question : '4 Inch Retina Screenshots',
          fieldType: 'image',
          required: true,
          info: 'Screenshots for 4-inch iPhone 5 and iPod touch (5th generation) Retina display must be 1136x640, 1136x600, 640x1136 or 640x1096 pixels, at least 72 DPI, in the RGB color space, and in the JPG or PNG format.',
        },
        {
          id: 'a28',
          Question : 'iPad Screenshots',
          fieldType: 'image',
          required: true,
          info: 'iPad Screenshots must be .jpeg, .jpg, .tif, .tiff, or .png file that is 1024x768, 1024x748, 768x1024, 768x1004, 2048x1536, 2048x1496, 1536x2048 or 1536x2008 pixels, at least 72 DPI, and in the RGB color space.',
        }
      ]
    },



  ]


  export default questions;