import React from "react";
export default function About() {
    return(
        <section id="about" style={{marginLeft:'9rem'}}>
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-center">
           <div class="sm:flex sm:items-center sm:justify-between">
             <div class="text-center sm:text-left">
                <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
                 Know Me More
                </h1>
             </div>
            </div>
            </div>
          <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col item-center flex justify-center">
            <div class="flow-root">
              <dl class="-my-3 divide-y divide-gray-100 text-sm">
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                 <dt class="font-medium text-gray-900">Name</dt>
                <dd class="text-gray-700 sm:col-span-2">Maged Hikal</dd>
               </div>
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt class="font-medium text-gray-900">E-mail</dt>
                <dd class="text-gray-700 sm:col-span-2">magnumhack2013@yahoo.com</dd>
               </div>
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt class="font-medium text-gray-900">Occuputation</dt>
               <dd class="text-gray-700 sm:col-span-2">Computer and network system engineer</dd>
               </div>
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt class="font-medium text-gray-900">From</dt>
               <dd class="text-gray-700 sm:col-span-2">Sweden</dd>
               </div>
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt class="font-medium text-gray-900">Languages</dt>
               <dd class="text-gray-700 sm:col-span-2"> English - Swedish - Arabic - Ukrainian - Russian </dd>
               </div>
               <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
               <dt class="font-medium text-gray-900">What i do</dt>
               <dd class="text-gray-700 sm:col-span-2"> Develop and build Apps or Systems according to customer requirements </dd>
               </div>
               </dl>
            </div>
          </div>
        </section>
    );
}