const questions = [
    {
      title: 'Business and Target Audience',
      key: 't1',
      data: [
        {
          id: 'a01',
          Question : 'What is the name of your Application?',
          fieldType: 'text',
          required: true,
          info: 'What is the name of your Application?'
        },
        {
          id: 'a02',
          Question : 'What are your products and services?',
          fieldType: 'multi-text',
          placeholder: 'Write product or services and press enter..',
          limit: 5,
          required: true,
          info: 'A value proposition is a clear statement that explains how your product or service solves a problem, delivers specific benefits, or improves a situation for your customers. It highlights what makes your offering unique or better than competitors.',
          suggestions: [
            'Home Cleaning', 
            'Plumbing', 
            'Electrical Repairs', 
            'Graphic Design', 
            'Web Development', 
            'Landscaping', 
            'Carpentry', 
            'Painting', 
            'Interior Design', 
            'Digital Marketing', 
            'Photography', 
            'Fitness Training', 
            'Catering', 
            'Pest Control', 
            'Pet Grooming', 
            'Mobile Repair', 
            'Car Detailing', 
            'Event Planning', 
            'Legal Consulting', 
            'Personal Shopping', 
            'Hair Styling', 
            'Accounting Services', 
            'IT Support', 
            'Information Technology',
            'Tutoring', 
            'Massage Therapy', 
            'HVAC Maintenance', 
            'Appliance Repair', 
            'Roofing Services', 
            'Moving Services', 
            'Financial Advising', 
            'Auto Repair', 
            'Window Cleaning', 
            'Yoga Instruction', 
            'Personal Chef', 
            'Tax Preparation', 
            'Copywriting', 
            'Social Media Management', 
            'Security Services', 
            'SEO Optimization', 
            'Virtual Assistance', 
            'App Development',
            'Real Estate'
          ]
        
        },
        {
          id: 'a03',
          Question : 'What is your business’ value proposition?',
          fieldType: 'text',
          required: true,
          info: 'A value proposition is a clear statement that explains how your product or service solves a problem, delivers specific benefits, or improves a situation for your customers. It highlights what makes your offering unique or better than competitors.'
        },
        {
          id: 'a04',
          Question : 'Who are your ideal customers?',
          fieldType: 'text',
          required: true
        },
        {
          id: 'a05',
          Question : 'Who are your competitors?',
          fieldType: 'multi-text',
          placeholder: 'Write competitor name / website and press enter..',
          limit: 5,
          required: false
        },
        {
          id: 'a06',
          Question : 'Which platforms are you targeting? (iOS, Android, both)',
          fieldType: 'option',
          required: true,
          option: ['Android', 'IOS','Both'],
          multiselect: false,
          info: 'A value proposition is a clear statement that explains how your product or service solves a problem, delivers specific benefits, or improves a situation for your customers. It highlights what makes your offering unique or better than competitors.'
        }

      ]
    },
    {
      title: 'About The Brand',
      key: 't1',
      data: [
        {
          id: 'a07',
          Question : 'How do you want your customers to see you? Name three things you hope they feel after interacting with your brand.',
          fieldType: 'text',
          required: true,
          info: 'A value proposition is a clear statement that explains how your product or service solves a problem, delivers specific benefits, or improves a situation for your customers. It highlights what makes your offering unique or better than competitors.'
        },
        {
          id: 'a08',
          Question : 'Do you have any other graphic design needs outside of this project (logo redesign, Letterhead , Business card, Other)',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'We confirm there are no additional graphic design needs outside this project.',
          placeholder: 'Please type all design needs and press enter..',
          limit: 5,
          required: false,
          suggestions: [
            "Logo Redesign",
            "Letterhead Design",
            "Business Card Design",
            "Brochure Design",
            "Flyer Design",
            "Social Media Graphics",
            "Website Graphics",
            "Infographics",
            "Presentation Design",
            "Banner Design",
            "Product Packaging",
            "Stationery Design",
            "Custom Illustrations",
            "Email Template Design",
            "Signage Design",
            "Catalog Design"
          ]
        },
        {
          id: 'a09',
          Question : 'Are you happy with your current branding?',
          fieldType: 'conditional-multi-text',
          Affemative: 'No',
          Negative: 'Yes',
          Negative_note: 'We will use your current branding guidlines on app.',
          placeholder: 'Please type issues with your current branding and press enter..',
          limit: 5,
          required: false
        },
        {
          id: 'a010',
          Question : 'Do you have a style guide, design guide, or anything else of the like that you’d like us to follow? This can include a logo, colors, and fonts.',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'there will be additional charges, if you want us create.',
          placeholder: 'please add url and press enter..',
          limit: 5,
          required: false
        },
        {
          id: 'a011',
          Question : 'What is the ideal outcome for this project? (Attract new customers, rebranding, etc.)',
          fieldType: 'text',
          required: true,
          info: 'A value proposition is a clear statement that explains how your product or service solves a problem, delivers specific benefits, or improves a situation for your customers. It highlights what makes your offering unique or better than competitors.'
        },
        {
          id: 'a012',
          Question : 'What kind of colors do you like?',
          fieldType: 'colorPicker',
          required: false,
          colorRequirement: ['Primary','Secondry','Neutral'],
          limit: 5
        },

        {
          id: 'a013',
          Question : 'What kind of Fonts do you like?',
          fieldType: 'multi-text',
          placeholder: 'please type font name and press enter..',
          limit: 5,
          required: false,
          info: 'You can find fonts in google fonts, Adobe Fonts, MyFonts,etc',
          suggestions: [
            'Roboto', 
            'Poppins', 
            'Open Sans', 
            'Lato', 
            'Montserrat', 
            'Oswald', 
            'Raleway', 
            'Nunito', 
            'Merriweather', 
            'Ubuntu', 
            'PT Sans', 
            'Roboto Condensed', 
            'Playfair Display', 
            'Rubik', 
            'Work Sans', 
            'Inconsolata', 
            'Inter', 
            'Noto Sans', 
            'Source Sans Pro', 
            'Karla', 
            'Mukta', 
            'Fira Sans', 
            'Josefin Sans', 
            'Quicksand', 
            'Bebas Neue', 
            'Exo 2', 
            'Heebo', 
            'Arvo', 
            'Lora', 
            'Zilla Slab', 
            'Anton', 
            'Crimson Text', 
            'Barlow', 
            'Teko', 
            'Cabin', 
            'Varela Round', 
            'Dosis', 
            'Play', 
            'Signika', 
            'Archivo', 
            'Titillium Web', 
            'Hind', 
            'Pacifico', 
            'Manrope', 
            'Asap', 
            'Cormorant Garamond', 
            'Righteous', 
            'Baloo 2', 
            'Sarabun'
          ]
        },


        {
          id: 'a014',
          Question : 'Is there anything you absolutely dislike in design?',
          fieldType: 'text',
          required: false
        },


        
        {
          id: 'a015',
          Question : 'Do you have existing content (text, images, videos)?',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'there will be additional charges for stock images,videos',
          placeholder: 'please add url and press enter..',
          limit: 10,
          required: true
        },
        {
          id: 'a016',
          Question : 'Will you need content creation services (copywriting, photography)?',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'We confirm there are no content creation services need',
          placeholder: 'please type services you need ..',
          limit: 10,
          required: true
        },

        {
          id: 'a017',
          Question : 'How often will you need to update the content?',
          fieldType: 'text',
          required: true
        },
        {
          id: 'a018',
          Question : 'Are there any application you admire? What do you like about them?',
          fieldType: 'text',
          required: false
        },
        {
          id: 'a019',
          Question : 'Do you have any wireframes or sketches for the app?',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'Ok, we will create concepts overselves',
          placeholder: 'please add url and press enter..',
          limit: 5,
          required: true
        },
        {
          id: 'a020',
          Question : 'Are there specific user flows or journeys you want to highlight?',
          fieldType: 'multi-text',
          placeholder: 'please add url and press enter..',
          limit: 5,
          required: false
        },
        {
          id: 'a021',
          Question : 'Do you have a preferred development platform or framework (e.g., React Native, Flutter)?',
          fieldType: 'conditional-multi-text',
          Affemative: 'Yes',
          Negative: 'No',
          Negative_note: 'Please confirm that we can use any technology based on project requirement.',
          placeholder: 'please add url and press enter..',
          required: true
        },

      ]
    }
  ]


  export default questions;