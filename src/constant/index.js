import sports from "../assets/sports.png";
import student from "../assets/student.png";
import mentalhealth from "../assets/mentalhealth.png";
import productivity from "../assets/productivity.png";
import stress from "../assets/stress.png";
import ptsd from "../assets/ptsd.png";
import resi from "../assets/resi.jpeg";
import book from "../assets/book.jpeg";
import sign from "../assets/signup.jpeg";
import blog1 from "../assets/blog1.jpeg"
import blog2 from "../assets/blog2.jpeg"
import blog3 from "../assets/blog3.jpeg"

const content = {
  imageOne: {
    title: "Pathway to Productivity",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, possimus aut.",
  },
  imageTwo: {
    title: "Unlock Your Potential",
    description:
      "Discover how resilience can help you thrive in challenging environments.",
  },
  imageThree: {
    title: "Stay Strong & Focused",
    description:
      "Resilience coaching to help you navigate life's most difficult moments.",
  },
};

const programmes = [
  {
    title: "Sports Coaching",
    image: sports,
    description:
      "A program designed to help sports persons enhance their mental resilience and handle pressure both on and off the field.",
  },
  {
    title: "Student Coaching",
    image: student,
    description:
      "This coaching program focuses on building resilience in students to help them overcome academic and personal challenges.",
  },
  {
    title: "Mental Awareness",
    image: mentalhealth,
    description:
      "A mental health awareness program aimed at educating and supporting young adults in managing stress, anxiety, and emotional well-being.",
  },
  {
    title: "Stress Seminars",
    image: productivity,
    description:
      "Tailored stress management seminars for senior executives to help them navigate high-pressure environments and maintain balance.",
  },
  {
    title: "NLP Productivity",
    image: stress,
    description:
      "This program uses Neuro-Linguistic Programming (NLP) techniques to improve productivity and focus in personal and professional life.",
  },
  {
    title: "PTSD Counseling",
    image: ptsd,
    description:
      "Specialized counseling for individuals suffering from PTSD, offering support and strategies for coping with post-traumatic stress.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    image: resi,
    profession: "Professional Athlete",
    description:
      "AVIRAMAM24 helped me build mental toughness and improve my resilience, both on and off the field. Highly recommend!",
  },
  {
    name: "Sarah Lee",
    image: book,
    profession: "Student",
    description:
      "Thanks to AVIRAMAM24, I was able to overcome my academic stress and develop a positive outlook toward my studies.",
  },
  {
    name: "Michael Johnson",
    image: sign,
    profession: "PTSD Survivor",
    description:
      "The resilience coaching has been life-changing for me. It gave me the tools to rebuild my life and move forward with confidence.",
  },
];

 const feesAndCharges = [
    {
      title: "Basic",
      price: "₹7,999",
      description: "Best for individuals seeking foundational resilience coaching.",
      features: ["1:1 Session", "Personalized Coaching", "Email Support"],
      buttonLabel: "Get Started",
    },
    {
      title: "Premium",
      price: "₹14,999",
      description: "Ideal for professionals and sports persons looking for personalized coaching.",
      features: ["All Basic Features", "1:1 and Group Sessions", "Priority Email and Chat Support"],
      buttonLabel: "Get Started",
    },
    {
      title: "Enterprise",
      price: "₹29,999",
      description: "Best for large organizations or individuals pursuing long-term resilience goals.",
      features: ["All Premium Features", "Extended 1:1 Sessions", "24/7 Support", "Quarterly Check-ins"],
      buttonLabel: "Get Started",
    },
  ];
    


// constants/index.ts
const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "Building Resilience for Challenging Times",
    url: "https://www.youtube.com/watch?v=dLu2F_EwAP8",
  },
  {
    id: 2,
    type: "video",
    title: "How Resilience Coaching Transforms Lives",
    url: "https://www.youtube.com/watch?v=_tjucUCjyqM",
  },
  {
    id: 3,
    type: "blog",
    title: "Overcoming PTSD: A Guide to Resilience",
    description: "An in-depth blog on PTSD and building resilience.",
    link: "/overcoming-ptsd-blog",
    thumbnail: blog1, // Add path to your thumbnail image
  },
  {
    id: 4,
    type: "video",
    title: "Mental Strength and Its Impact on Success",
    url: "https://www.youtube.com/watch?v=TUJIMDuPkT8",
  },
  {
    id: 5,
    type: "video",
    title: "Resilience Strategies for Students",
    url: "https://www.youtube.com/watch?v=hcfLLH8k9q8",
  },
  {
    id: 6,
    type: "blog",
    title: "The Power of Resilience in Sports activities",
    description: "Exploring resilience strategies for athletes/sports persons",
    link: "/resilience-in-sports-blog",
    thumbnail: blog2, // Add path to your thumbnail image
  },
  {
    id: 7,
    type: "blog",
    title: "Mindfulness Techniques for Stress Management",
    description: "Techniques for building resilience through mindfulness.",
    link: "/mindfulness-techniques-blog",
    thumbnail: blog3, // Add path to your thumbnail image
  },
];



  

export { content, programmes, testimonials,feesAndCharges,mediaItems };
