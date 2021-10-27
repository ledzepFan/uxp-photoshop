(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[5995],{6019:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return x}});var n=a(22122),m=a(19756),d=(a(15007),a(64983)),r=a(99536),l=["components"],o={},p={_frontmatter:o},i=r.Z;function x(e){var t=e.components,a=(0,m.Z)(e,l);return(0,d.mdx)(i,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"photoshopcore"},"photoshopCore"),(0,d.mdx)("p",null,"The module that allows access to specialized commands\nwithin the application. Various application state can be\nmodified or queried here."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"var PhotoshopCore = require('photoshop').core;\n")),(0,d.mdx)("h2",{id:"variables"},"Variables"),(0,d.mdx)("h3",{id:"apiversion"},"apiVersion"),(0,d.mdx)("p",null,"• ",(0,d.mdx)("inlineCode",{parentName:"p"},"Let")," ",(0,d.mdx)("strong",{parentName:"p"},"apiVersion"),": ",(0,d.mdx)("em",{parentName:"p"},"number")),(0,d.mdx)("p",null,"API Version declared by the plugin's manifest.json under ",(0,d.mdx)("inlineCode",{parentName:"p"},"host.data.apiVersion")," field."),(0,d.mdx)("p",null,"If value 1, you will have access to Photoshop 22.0 DOM and be able to make mutable calls outside a modal state.\nIf 2, you will have access to latest DOM, modal execution and everything else new we're adding."),(0,d.mdx)("h2",{id:"functions"},"Functions"),(0,d.mdx)("h3",{id:"calculatedialogsize"},"calculateDialogSize"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<{ ",(0,d.mdx)("inlineCode",{parentName:"p"},"height"),": ",(0,d.mdx)("em",{parentName:"p"},"number")," ; ",(0,d.mdx)("inlineCode",{parentName:"p"},"width"),": ",(0,d.mdx)("em",{parentName:"p"},"number"),"  }",">"),(0,d.mdx)("p",null,"Returns the effective size of a dialog."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"var idealSize = { width: 200, height: 500 }\n{ width, height} = await PhotoshopCore.calculateDialogSize(idealSize)\n")),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"preferredSize")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"preferredSize.height")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"preferredSize.width")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"identifier?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"minimumSize?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"minimumSize.height")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"minimumSize.width")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"convertcolor"},"convertColor"),(0,d.mdx)("p",null,"ColorDescriptor"),(0,d.mdx)("p",null,"Converts the given color (in descriptor form) to the\ngiven color space, returning the color descriptor."),(0,d.mdx)("p",null,"This is an internal API that is used for ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},"SolidColor"),"\nand all the other color classes."),(0,d.mdx)("p",null,"Currently, this API uses the application color settings\nfor conversion (Edit > Color Settings...). '\nIn the future, we will provide color conversion\nbased on embedded color profiles."),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/coremodules/#colorconversionmodel"},(0,d.mdx)("em",{parentName:"a"},"ColorConversionModel")))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"endmodaltoolstate"},"endModalToolState"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"End the current modal tool editing state."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// close the modal dialog, cancelling changes\nawait PhotoshopCore.endModalToolState(false)\n")),(0,d.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"commit")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"boolean"))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"executeasmodal"},"executeAsModal"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.\nThis includes scenarios where the plugin wants to create or modify documents,\nor the plugin wants to update UI or preference state."),(0,d.mdx)("p",null,"ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher."),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"../executeasmodal"},"Modal Execution")," for details"),(0,d.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"targetFunction")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"(",(0,d.mdx)("inlineCode",{parentName:"td"},"executionContext"),": ",(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/interfaces/executioncontext/"},(0,d.mdx)("em",{parentName:"a"},"ExecutionContext")),") => ",(0,d.mdx)("em",{parentName:"td"},"Promise"),"<any",">")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/interfaces/executeasmodaloptions/"},(0,d.mdx)("em",{parentName:"a"},"ExecuteAsModalOptions")))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"getactivetool"},"getActiveTool"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<{ ",(0,d.mdx)("inlineCode",{parentName:"p"},"classID"),": ",(0,d.mdx)("em",{parentName:"p"},"string")," ; ",(0,d.mdx)("inlineCode",{parentName:"p"},"isModal"),": ",(0,d.mdx)("em",{parentName:"p"},"boolean")," ; ",(0,d.mdx)("inlineCode",{parentName:"p"},"key"),": ",(0,d.mdx)("em",{parentName:"p"},"string")," ; ",(0,d.mdx)("inlineCode",{parentName:"p"},"title"),": ",(0,d.mdx)("em",{parentName:"p"},"string"),"  }",">"),(0,d.mdx)("p",null,"Returns information about the active Photoshop tool."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{ title } = await PhotoshopCore.getActiveTool()\n")),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"getcpuinfo"},"getCPUInfo"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/interfaces/cpuinfo/"},(0,d.mdx)("em",{parentName:"a"},"CPUInfo"))),(0,d.mdx)("p",null,"Returns information about the host CPU."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'{ logicalCores, frequencyMhz, vendor } = PhotoshopCore.getCPUInfo()\nvar isAMD = vendor === "AMD"\nvar isARM = vendor === "ARM"\n')),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"getgpuinfo"},"getGPUInfo"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/interfaces/gpuinfo/"},(0,d.mdx)("em",{parentName:"a"},"GPUInfo"))),(0,d.mdx)("p",null,"Returns OpenGL and OpenCL information about the available graphics processor."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'{ gpuInfoList, clgpuInfoList } = PhotoshopCore.getGPUInfo()\nconsole.log(JSON.stringify(gpuInfoList))\n// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]\nconsole.log(JSON.stringify(clgpuInfoList))\n// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]\n')),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"getmenucommandstate"},"getMenuCommandState"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,d.mdx)("p",null,"Returns whether a command menu item is available for invoking."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// can a Fill be performed?\nvar canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })\n")),(0,d.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.commandID")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"getmenucommandtitle"},"getMenuCommandTitle"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<string",">"),(0,d.mdx)("p",null,"Returns the localized menu title of the menu command item."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })\n")),(0,d.mdx)("h4",{id:"parameters-5"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.commandID?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.menuID?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"performmenucommand"},"performMenuCommand"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,d.mdx)("p",null,"Invokes the menu command via its ",(0,d.mdx)("inlineCode",{parentName:"p"},"commandID"),". Returns false\non failure, or if the command is not available."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// select all\nawait PhotoshopCore.performMenuCommand({ commandID: 1017 })\n")),(0,d.mdx)("h4",{id:"parameters-6"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.commandID")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"number"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"showalert"},"showAlert"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,d.mdx)("p",null,"Show a generic alert box to the user. 'OK' to dismiss."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"// script has completed.\nawait PhotoshopCore.showAlert({ message: 'Operation successful'})\n")),(0,d.mdx)("h4",{id:"parameters-7"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"object"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"options.message")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string"))))),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"translateuistring"},"translateUIString"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"string")),(0,d.mdx)("p",null,"Given a Photoshop ZString (of format ",(0,d.mdx)("inlineCode",{parentName:"p"},'"$$$/slash/separated/key=english default value"'),"),\nwill return the translated string for the current UI language"),(0,d.mdx)("h4",{id:"parameters-8"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"zstring")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("em",{parentName:"td"},"string"))))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-photoshopcore-md-04334e19a5753e0043cd.js.map