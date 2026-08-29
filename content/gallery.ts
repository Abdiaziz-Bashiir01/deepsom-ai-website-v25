export const galleryCategories=["Events","Training","Workshops","Research","Students","Partnerships","Institute Activities"] as const;
export type GalleryCategory=(typeof galleryCategories)[number];
export type GalleryItem={src:string;category?:GalleryCategory;alt:string};
// Categories remain unset until verified by Deepsom; no labels are inferred from filenames.
export const galleryItems:GalleryItem[]=Array.from({length:16},(_,index)=>({src:`/images/gallery/gallery-${index+1}.jpg`,alt:"Deepsom AI gallery photograph"}));
