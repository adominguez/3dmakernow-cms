import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import PrinterPagePreview from './preview-templates/PrinterPagePreview';
import MaterialPagePreview from './preview-templates/MaterialPagePreview';
import { ProductsListControl } from "./widgets/ProductsList";
import { CompareProductsControl } from "./widgets/CompareProducts";
import { SeoPageControl } from './widgets/SeoPage';
import ProductsList from "../components/productsList";
import CompareProducts from "../components/compareProducts";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget("compareProducts", CompareProductsControl, CompareProducts);
CMS.registerWidget("productsList", ProductsListControl, ProductsList);
CMS.registerWidget("seoPage", SeoPageControl);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('impresoras', PrinterPagePreview);
CMS.registerPreviewTemplate('materiales', MaterialPagePreview);
