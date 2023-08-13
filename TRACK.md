# To fix

- Template Id will be unique and Component Id will be unique //CANCELLED
- base font size in helpers //DONE
- remove unncessary code //DONE
- better folder structure -> move initial styles to helper , types to constant //DONE
- Navbar link error issue // DONE
- Navbar nested menu remove to manual //DONE
- Fix inline styling and create new components using base component //DONE
- Navbar components breakdown and fix code readability //DONE
- Fix icon pack issue //DONE
- Move the customization pallet to a base object and onclick to add more of that object and limit using the function and display toast that cant add more // DONE
- Cutomization Pallete helper functions //DONE
- reducers individual component // DONE
- Parent Id child relation //CANCELLED
- debounce function hook for dispatch actions //DONE
- Font Package https://www.npmjs.com/package/font-picker
- Avatar or next image wrapper?
- nav2 tabs getting bigger after adding icon // DONE
- fix shouldforwardprop on every component to a helper function //DONE

# TO ASK
- optimal way for common states and their constant??? TO ASK
- drawer alignment issue and nav2 alignment issue?? TO ASK
- ux issues of nav1 and nav2 like when dropdown enable what to happen main link should work or not etc and focusing?? TO ASK
- how ids will work eg navId?? TO ASK
- how to implement Icons?? TO ASK
- Image uploading issue (create URL) and upload on submit //TO ASK
- Slice update issue //LATER //TO ASK
- structured clonings or what convention?? //TO ASK
- Error handling for everything like text length or text length 0 etc for different types of palletes?? // TO ASK
- extrafunctionalities handling incase of multiple modifiable components in a component?? // TO ASK
- how to keep templates area design and functionality wise? // TO ASK
- dom warning fix to ask better approach props!=="colorHex"// TO ASK
- name clashings when too many subcomponents of navbar types // TO ASK
- how tooltip should work? // TO ASK
- how sections should be added? // TO ASK

# To resolve

- Event type redundancy of set initial //DONE

# MISC

- remove the user slice and move to next-auth

# Later

- navbar replace but other components add base on their type
- add tooltip of focused component
- template when added so edit area should not whole rerender. just only the added component should render. or any other better approach

AIzaSyAsxy6OklUuxBjHnNlcdkhfvDEBsm3IEes


# New to fixes

- navState break states into multiple states for easibility //DONE
- enums to be named properly //Done
- remove dropdowns completely //DONE
- (async thunk)function to send updated component data to api and function to send add component data to api(different thunks for nav and page component which includes add/update reducers)  
- pagename and website id work
- fix simple nav tabs to be buttons and add logo with alt text and option to upload image 

# ASK
- default behaviour implementation and code design if editing area is directly accessed?
- what to add in some cases of pending and fullfilled?
- what will happen to componentId? we are using it for handling selected components
- navbar should be pre-added? pages wont be visible then if not added. and how will we fetch navbar on initial load if not pre-added? if pre-add then what approach to use?
- page components pre-added?
- templates in db why? pre-fetch and ssr why required?