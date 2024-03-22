import React from "react";
import ReadmoreComponent from './ReadmoreComponent';
export default function Resume() {
    return(
        <section id="resume" style={{marginLeft:'9rem'}}>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-center">
              <div class="sm:flex sm:items-center sm:justify-between">
                <div class="text-center sm:text-left">
                  <h1 class="sm:text-4xl text-3xl font-medium title-font text-purple-900 mb-4">
                    Resume
                  </h1>
                </div>
               </div>
            </div>
            <div class="text-center sm:text-left">
                <h1 class="sm:text-4xl text-3xl font-medium title-font text-purple-900 mb-4 flex justify-center">
                My Experience
                </h1>
            </div>
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col item-center flex justify-center">
             <div class="container mx-auto my-auto flex flex-wrap w-auto">
             <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                 <h4 class="mb-2 text-lg font-semibold"> Fullstack Developer</h4>
                  <h4 class="mb-2 text-sm font-semibold text-blue-600"> Dec 2023 - FEB 2024 </h4>
                  <ReadmoreComponent
                  initialText="REXOR AB, Sweden - Malmö"
                  fullText={
                          <>
                  • I worked with the development of a checkout system that facilitates
                    sales via an Android system, programmed by C#.<br/>
                  • My main goal is to provide an optimal store experience for all visitors and customers.<br/>
                  • I enthusiastically helped customers and always provided excellent
                    customer service.
                  </>
                           }
                  />  
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                 <h4 class="mb-2 text-lg font-semibold"> CEO - Business developer  </h4>
                  <h4 class="mb-2 text-sm font-semibold text-blue-600"> MAR 2019 - FEB 2023 </h4>
                  <ReadmoreComponent
                  initialText="Matgross i Lycksele AB, Sweden - Lycksele"
                  fullText={
                          <>
                  • I worked with the development of a checkout system that facilitates
                    sales via an Android system, programmed by C#.<br/>
                  • My main goal is to provide an optimal store experience for all visitors and customers.<br/>
                  • I enthusiastically helped customers and always provided excellent
                    customer service.
                  </>
                           }
                  />  
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                <div class="p-8 rounded-xl shadow-md border border-gray-200">
                  <h4 class="mb-2 text-lg font-semibold"> System developer  </h4>
                   <h4 class="mb-2 text-sm font-semibold text-blue-600"> NOV 2018 - FEB 2019 </h4>
                   <ReadmoreComponent
                    initialText="Techno MG, Sweden - Nörrköping"
                    fullText={
                      <>
                    • Developed CMS by automating a tool that
                      Facilitate work so customers can manage different web sources at once,
                      add design and link to databases without programming skills.<br/>
                    • My main goal is for customers to be able to create several websites
                      on their own. 
                      </>
                           }
                    /> 
                </div>
              </div>
                <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                  <div class="p-8 rounded-xl shadow-md border border-gray-200">
                   <h4 class="mb-2 text-lg font-semibold"> Web Developer  </h4>
                    <h4 class="mb-2 text-sm font-semibold text-blue-600"> NOV 2016 - OCT 2018 </h4>
                    <ReadmoreComponent 
                    initialText="Move24 AB, Sweden - Norrköping"
                    fullText={
                      <>
                      • The role was as backend system developer, database programming SQL,
                        CMS developer with PHP and javascript.<br/>
                      • The idea here is to give customers the opportunity to book and calculate
                        the price according to their budget with
                        help of AI to find the best prices and service that suits
                        the customers' needs. 
                      </>
                    }   
                    />
                   </div>
                 </div>
                   <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> IT-Support  </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> APR 2009 - NOV 2010 </h4>
                        <ReadmoreComponent 
                        initialText="IBM Technologies, Ukraine - Kyiv"
                        fullText={
                          <>
                          • Helped customers and provided them with the best computer hardware
                            maintenance with high-quality services.<br/>
                          • My main goal is to provide the customers fast and
                            guaranteed service.
                          </> 
                        }
                            />
                     </div>
                  </div>
              </div>   
           </div>
           <div class="text-center sm:text-left">
                <h1 class="sm:text-4xl text-3xl font-medium title-font text-purple-900 mb-4 flex justify-center">
                My Education
                </h1>
            </div>
            <div class="container mx-auto flex flex-wrap">
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Diploma in System developer .Net  </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Lexicon Malmö 2023-2024 </h4>
                     </div>
                     
            </div> 
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Diploma in Computer Engineering  </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Chernovtsy National University, Ukraine 2010 </h4>
                     </div>
                     
            </div> 
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Master's degree Networksystem, Design and installation  </h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> Chernovtsy National University, Ukraine 2011 </h4>
                     </div>
                     
            </div> 
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Certificate of Introduction to Cyber Security</h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> NYU (New York University) 2022</h4>
                     </div>
                     
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full p-1">
                    <div class="p-8 rounded-xl shadow-lg border border-gray-200">
                      <h4 class="mb-2 text-lg font-semibold"> Certificate of Cyber Security (Attack and Defence)</h4>
                        <h4 class="mb-2 text-sm font-semibold text-blue-600"> EC-Council CODERED 2022</h4>
                     </div>
                     
            </div>  
            </div>                            
        </section>
    );
}