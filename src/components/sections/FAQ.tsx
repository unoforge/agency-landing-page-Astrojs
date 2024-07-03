import {
    Button,
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
  import { RxPlus } from "react-icons/rx";
  import BtnLink from "../shared/BtnLink.astro";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq4 = (props: Faq4Props) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
      ...Faq4Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] text-heading-1 dark:text-tertiary py-16 md:py-24 lg:py-28 mt-32">
        <div className="container mx-auto max-w-lg">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
            {questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-secondary dark:border-tertiary px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                  }
                  className="md:py-5 md:text-md text-left [&[data-state=open]>svg]:rotate-45"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footerHeading}
            </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8">
              <Button {...button} >{button.title}</Button>
              {/* <BtnLink href="https://tidycal.com/silvandre/15-minute-meeting" text="Book a Free Discovery Call" variant="primary" className="lg:text-2xl sm:text-xl shadow-lg shadow-box-shadow"/> */}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Faq4Defaults: Faq4Props = {
    heading: "FAQs",
    description:
      "Here you can find answers to some of our most frequently asked questions. Hopefully it will help you better understand how our business works!",
    questions: [
      {
        title: "What services does Hinterland Web offer?",
        answer:"We offer a comprehensive range of web services including website design, web app development, hosting, SEO optimization, business automation, and chatbot integration. Our goal is to be the local expert that provide a one-stop solution for all your digital needs."},
      {
        title: "I'm a small business owner/solo trader. Can you help with my website?",
        answer:
          "Absolutely! We specialize in creating websites for small businesses and solo traders like hairdressers, tradespeople, and coffee shop owners. We understand the unique needs of local businesses and tailor our services to help you establish a strong online presence."},
      {
        title: "How can a website help my small business compete with larger companies?",
        answer:
          "A well-designed website levels the playing field, allowing you to showcase your products or services professionally. With our SEO services, you can improve your visibility in local searches. Plus, features like automation and chatbots can help you provide 24/7 customer service, matching the capabilities of larger businesses."},
      {
        title: "Do you serve businesses outside of the Sunshine Coast?",
        answer:
          "While we primarily serve the Sunshine Coast area, we're open to discussing projects from other locations. Our local focus allows us to provide personalized service and understand the specific needs of businesses in our community."},
      {
        title: "What's your process for creating a website?",
        answer:
          "Our process is straightforward and client-focused. It begins with a Discovery Call to understand your needs, followed by sending you a detailed proposal. Once payment is arranged, we create a project draft. We then schedule a feedback call for any necessary changes before launching your site."},
      {
        title: "How long does it take to get my website up and running?",
        answer:
          "It will always depend on the size of your project, if you have any design files already, your cooperation  and your timeline, if it is just a simple landing page with relevant call-to-action it can be done withing a week."},
      {
        title: "Do you offer ongoing support after my website is launched?",
        answer:
          "Yes, we offer ongoing support and maintenance services starting at $100 per year. This includes website hosting, content update, and regular checks to ensure your site continues to perform optimally."},
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: {
      title: "Get in touch",
      
      variant: "primary",
      className:"lg:text-2xl sm:text-xl shadow-lg shadow-box-shadow px-6 py-3 rounded-full bg-primary text-white hover:bg-secondary"},
  };
  
  Faq4.displayName = "Faq4";
  


