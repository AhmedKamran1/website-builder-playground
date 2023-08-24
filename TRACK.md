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
- nav2 tabs getting bigger after adding icon // DONE
- fix shouldforwardprop on every component to a helper function //DONE

# TO ASK

- Avatar or next image wrapper?
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
- how sections should be added? // TO ASK

# To resolve

- Event type redundancy of set initial //DONE

# MISC

- remove the user slice and move to next-auth

# Later

- navbar replace but other components add base on their type
- add tooltip of focused component and how should it work
- template when added so edit area should not whole rerender. just only the added component should render. or any other better approach
- optimize next images
- font bold, italic on selection just like teachable

# New to fixes

- navState break states into multiple states for easibility //DONE
- enums to be named properly //Done
- remove dropdowns completely //DONE
- what to add in some cases of pending and fullfilled? (isSaved) // DONE
- (async thunk)function to send updated component data to api and function to send add component data to api(different thunks for nav and page component which includes add/update reducers) //DONE
- pagename and website id work //DONE
- fix simple nav tabs to be buttons and add logo with alt text and option to upload image
- paragraph change on enter press and render accordingly to it //DONE
- extract common components,fix image pallete for navbar,fix section palletes structure
- remove button work completely
- naming conventions of states in customization pallete, grid naming convention, enums of sections/navbar if necessary
- remove unnesecary properties from common-section-palletes folders components
- update happening on changing selected component

# ASK

- split updates into styles and extrafunctionalities. only one should update at a time
- what will happen to componentId? we are using it for handling selected components and if we add dummy components then issue happens
- what will happen to sectionId and NavId?
- default behaviour implementation and code design if editing area is directly accessed? //solution is not possible //ASK
- navbar pre-fetch problem?
- image pallete and similar properties like used in gridimages are slightly different what to do?
- SectionGridImage.js and SectionGridButton.js me jugaar
- 2 types of same pallete one for grid and other for non-grid
- button styles should have bold/italic text options?
- in whole project index is utilized as key while mapping whhich is not recommended

fix section pallete structure, 3 newly added section all properties, old sections all properties, image working for section pallete 4
