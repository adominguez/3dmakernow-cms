import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ReviewPageTemplate from './preview-templates/reviewsPagePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import { ProductsListControl } from "./widgets/ProductsList";
import { SeoPageControl } from './widgets/SeoPage';
import ProductsList from "../components/productsList";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget("productsList", ProductsListControl, ProductsList);
CMS.registerWidget("seoPage", SeoPageControl);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('reviews', ReviewPageTemplate);
