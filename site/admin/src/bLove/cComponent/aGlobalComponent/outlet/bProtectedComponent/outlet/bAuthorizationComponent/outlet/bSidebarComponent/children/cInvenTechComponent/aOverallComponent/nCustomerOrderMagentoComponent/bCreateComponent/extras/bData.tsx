const data = (_APICall?: any) => {
  return ({
    header: {
      title: "Add Customer Order",
      subtitle: "",
      buttons: []
    },
    content: {
      sections: [
        // Basic Information
        {
          display: false,
          title: "Basic Information",
          subtitle: "In this section, please enter title, subtitle, description, etc.",
          inputs: [],  
        },

        // Personal Information
        {
          display: false,
          title: "Personal Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

        // Relation Information
        {
          display: false,
          title: "Relation Information",
          subtitle: "In this section, you will see relation details.",
          inputs: [],  
        },

        // More Information
        {
          display: true,
          title: "More Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [
            { name: "", label: "ID", type: "text", style: "col-span-1" },
            { name: "", label: "Purchase Date", type: "text", style: "col-span-1" },
            { name: "", label: "Billing Name", type: "text", style: "col-span-1" },
            { name: "", label: "Billing Address", type: "text", style: "col-span-2" },

            { name: "", label: "Customer Name", type: "text", style: "col-span-2" },
            { name: "", label: "Shipping Name", type: "text", style: "col-span-1" },
            { name: "", label: "Shipping Name", type: "text", style: "col-span-2" },
            
            { name: "", label: "Custoemr Email", type: "text", style: "col-span-2" },
          ],  
        },

        // Critical Information
        {
          display: false,
          title: "Critical Information",
          subtitle: "In this section, you will see created and updated details.",
          inputs: [],  
        },

      ],
    }
  })
}

export default data