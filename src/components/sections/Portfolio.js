import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This is a simplified example. For production, you should
// handle fonts and other Next.js specific features in a way
// that is compatible with the environment.
// For now, we will use a standard font family.

// Mock data for the portfolio items. You can replace this with your actual data.
// It's structured to have alternating layouts (image left, image right).
const portfolioItems = [
  {
    id: 1,
    title: "AI-Powered Viral Shorts Automation",
    description: "This end to end automation generates and publishes cinematic animal battle videos for social media using AI. It pulls data from Google Sheets, uses GPT-4 to generate matchups, creates photorealistic image prompts with PiAPI, renders videos via Creatomate, and auto-posts to Instagram, TikTok, and YouTube through Blotato completely hands free.",
    image: "/images/image1.png", // Replaced with a placeholder image
  },
  {
    id: 2,
    title: "AI-Driven Lead Generation & Personalized Email Writing Automation",
    description: "This workflow automatically scrapes verified leads from Apollo.io, filters and maps key contact data, and stores it in Google Sheets. It then uses GPT-4 to generate personalized cold emails based on company info and role-specific context. The entire process, lead sourcing, data enrichment, and outreach copywriting, is fully automated and ready to scale.",
    image: "/images/image2.png",
  },
  {
    id: 3,
    title: "AI Cold Calling & Booking Automation",
    description: "This workflow automates cold outreach using a GPT-powered voice assistant via VAPI. It fetches leads marked “To Call” from Airtable, checks calendar availability, and scripts a personalized pitch to offer a free website review. The AI voice assistant then calls the lead, delivers the pitch, and handles the conversation. If a meeting is booked, the system, Extracts the agreed time using AI, Schedules the meeting in Google Calendar, Updates lead status and call summary in Airtable. The call outcome is auto-classified into categories like Meeting Scheduled or Do Not Follow Up enabling hands free lead engagement from call to calendar.",
    image: "/images/image3.png",
  },
  {
    id: 4,
    title: "Client Onboarding Automation Workflow",
    description: "This workflow streamlines the entire onboarding process for new clients using AI and integrated tools. Triggered by a form submission, it automatically  Creates a Google Drive folder for file sharing Sets up a ClickUp folder, list, and 20–30 onboarding tasks parsed from the client’s proposal Generates and sends a personalized welcome email with links to resources Creates a dedicated Slack channel and posts an onboarding message Invites the client to schedule an onboarding call Uses GPT-4 to extract detailed task items with due dates for project setup The entire onboarding from form to task creation, file access, and communication is executed in seconds, reducing manual setup and ensuring consistency across all new projects.",
    image: "/images/image4.png",
  },
  {
    id: 5,
    title: "LinkedIn Content Repurposing & Publishing AI Workflow",
    description: "This powerful n8n automation scrapes LinkedIn posts from competitors, filters out previously saved content, analyzes post formats (text, image, video, document), and uses GPT-4o to repurpose each post into 3 unique formats Text-only, Text + Infographic (auto-generated layout)Text + Tweet-style postThe system saves each version to Airtable, marks content as ready, and then auto-publishes posts to LinkedIn based on a scheduled trigger ensuring daily, high value content distribution without human input.Additional features include Auto transcription of video and audio posts Telegram-based voice/text assistant for new content ideas , Memory buffered GPT-4 agent for consistent tone Airtable sync and status tracking for every post",
    image: "/images/image5.png",
  },
  {
    id: 6,
    title: "AI-Powered Product Video Generator",
    description: "This workflow turns any uploaded product photo into a premium marketing video—fully automated. Triggered via a simple form (photo, title, and description), it uses GPT-4 to craft a studio-style image prompt, generates a polished product shot, and then animates it into a cinematic rotating video using RunwayML. This fully automated workflow starts by uploading a product photo to Google Drive, where GPT-4 generates a hyper-realistic photography prompt. The image is then enhanced using OpenAI’s image API and uploaded to ImgBB, after which the link is sent to RunwayML to create a 10-second 3D turntable-style product video. Finally, both the enhanced image and the video are delivered via Gmail. This hands-free system provides professional marketing assets in minutes, making it ideal for DTC brands and ecommerce teams.",
    image: "/images/image6.png",
  },
  {
    id: 7,
    title: "Telegram-Powered Stock Analysis Assistant",
    description: "This automation creates a conversational AI financial analyst that lives inside Telegram. Users can ask about any stock or financial concept, and the system responds with real-time technical chart analysis and clear explanations.This system uses Anthropic Claude or GPT-4o to chat with users in natural language, automatically detecting and extracting stock tickers from their prompts. It then calls a TradingView-based chart API to fetch real-time candlestick charts and performs AI-driven technical analysis, including MACD, candlestick pattern recognition, volume analysis, and support/resistance detection. Within seconds, the chart and analysis are sent back to Telegram. With memory buffering to remember previous conversations, it enables deeper, more contextual interactions making it perfect for building a smart financial assistant, trading bot frontend, or educational tool for investors.",
    image: "/images/image7.png",
  },
  {
    id: 8,
    title: "Research Agent",
    description: "An autonomous research agent that taps into real-time data sources like Wikipedia, Hacker News, and Google (via SerpAPI) to answer any user query. The agent leverages OpenAI’s chat model for reasoning and combines it with live tools to deliver fresh, accurate insights. It maintains memory context and returns polished responses—ideal for research automation, content prep, or briefing bots.",
    image: "/images/image8.png",
  },
  {
    id: 9,
    title: "Calendar Agent",
    description: "This agent handles smart calendar operations through conversation. It uses OpenAI’s chat model to interpret user intent, checks for existing events, and schedules new meetings via Google Calendar. Memory is retained for seamless follow-ups, and the system can manage invites with or without attendees. A perfect automation layer for smart scheduling assistants.",
    image: "/images/image9.png",
  },
  {
    id: 10,
    title: "Voice-Powered Personal Assistant",
    description: "A fully voice-enabled AI assistant inside Telegram. This system transcribes audio messages, routes tasks to specialized agents (email, calendar, research), and responds with AI-generated messages—or even returns answers in voice. Backed by Pinecone vector search and OpenAI embeddings for memory aware responses. It's a powerful assistant that understands and acts, all via voice.",
    image: "/images/image10.png",
  },
  {
    id: 11,
    title: " Email Agent",
    description: "An intelligent Gmail automation agent that reads, understands, and replies to emails using OpenAI’s chat model. It supports memory for ongoing threads, pulls context from past messages, and formats replies that sound human and professional. Designed to streamline email workflows without losing the personal touch.",
    image: "/images/image11.png",
  },
  {
    id: 11,
    title: "Email Sales Agent",
    description: "This intelligent email automation system is designed to qualify leads, manage CRM data, and auto-draft personalized replies—all triggered by incoming emails. It continuously monitors a Gmail inbox, processing every new message by automatically extracting key lead details such as name, email, company, and pain points. Using OpenAI, it determines whether the sender is a new lead or an existing client. For new leads, the system searches Google and LinkedIn for public information, scrapes the company’s homepage, summarizes the business using GPT-4o, and adds the complete profile with notes to Airtable CRM. For existing clients, it summarizes the latest email, updates Airtable notes, and scans a Google Docs knowledge base for relevant content. Whenever possible, it drafts a tailored email reply—complete with subject and body—using AI, sends it to the sales rep for approval, and auto-sends it once approved.",
    image: "/images/image12.png",
  }
];

const PortfolioItem = ({ item }) => {
  const { title, description, image } = item;

  return (
    <div className="w-full">
      <div className={`flex flex-col md:flex-row gap-8 items-start mb-8`}>
       <div className="relative h-96 w-full md:w-1/2 p-4"> {/* Adjust h-96 for height */}
  <Image
    src={image}
    alt={title}
    fill
    className="rounded-lg shadow-lg border border-white/10 object-cover"
  />
</div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-100 mb-2 text-center ">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-center ">{description}</p>
        </div>
      </div>
      <div className="w-full h-px bg-white/60 my-8"></div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-[#0b0c0d] text-white min-h-screen">
      {/* Hero Section */}
     
      <main className="container mx-auto max-w-6xl p-4 md:p-8">
        {/* Main Heading */}
        <div className="text-center my-16">
          <h2 className="text-4xl sm:text-6xl font-bold text-white text-bold">Latest Showcase & Solutions by <span className="text-gray-100 text-bold">Exerra AI</span></h2>
        </div>

        {/* Portfolio Items Section */}
        <div className="space-y-16">
          {portfolioItems.map(item => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </main>
           <div className="flex items-center justify-center">

      <Link
        href="/Free-audit" // Replace with your actual consultation/contact link
        className="inline-block bg-[#DCEA22] hover:bg-[#DCEA22]/90 text-[#050607] font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
        Get a Custom Quote
      </Link>
        </div>
    </div>
  );
}
