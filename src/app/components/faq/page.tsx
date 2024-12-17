import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion";

const FAQ = () => (
  <Accordion type="single" className="text-white mt-[0px] py-6 rounded-[40px]" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="font-bold text-lg opacity-90">How does the Logo Design order process work?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      When you place an order for a minimalist logo or modern logo design, you'll need to provide information about your business logo needs. Based on your input, a design concept will be created and sent to you for review. You can request revisions to ensure the final logo to meets your expectations.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="font-bold text-lg opacity-90">How does the Web Development order process work?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      When you place an order for a website, you'll need to provide UI/UX information (Figma recommended) which will contain theme, measurement etc. Based on your input, a front-end website design will be generated as-is and will be shared with you for review. For back-end design, you will need to specify or provide a working Figma/Adobe XD UI/UX design. Videos can be also used to guide for back-end development for your website. You can request revisions to ensure the final website design to meets your expectations.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="font-bold text-lg opacity-90">How does the 3D Modeling order process work?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      When placing an order for a 3D Model design, please provide details about the type of model you're looking for, the desired polycount (Low, Mid, High/Range), and a reference image. Based on your input, I will create a model tailored to your specifications.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger className="font-bold text-lg opacity-90">What types of 3D models can you create?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      We specialize in creating various types of 3D models, including characters, environments, vehicles, props, and more. Whether you need a low-poly or high-poly model, we can customize it to meet your needs.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger className="font-bold text-lg opacity-90">How does the 3D Rigging order process work?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      When placing an order for 3D Rigging, please provide the model you're looking to be rigged, ensure that you're models are always secured. Based on your input, I will create the rig of model tailored to your specifications.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
      <AccordionTrigger className="font-bold text-lg opacity-90">How does the 3D Animation order process work?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      When placing an order for 3D animation, provide details about the animation style, the model(s), and any specific actions or movements you want. Based on your input, I’ll create an animation and provide an initial draft. Revisions are offered to ensure the final animation meets your expectations.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7">
      <AccordionTrigger className="font-bold text-lg opacity-90">Who holds the copyright for the designs?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      As a client, you'll retain the copyright for your business logo/3D Model design upon completion of the project, ensuring you have full ownership and control over your brand's visual identity. However, 3D Models specifically are not resellable without permission.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-8">
      <AccordionTrigger className="font-bold text-lg opacity-90">How long does delivery takes?</AccordionTrigger>
      <AccordionContent className="text-lg opacity-90">
      For 2D Logos, It will be around 2 days.<br/>
      For Web Development, It depends on the details.<br/>
      For 3D Models, It depends on the details.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default FAQ;