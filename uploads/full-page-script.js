<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:js='true' b:layoutsVersion='3' b:render='true' b:responsive='true' b:templateUrl='https://www.jettheme.com' b:templateVersion='2.9' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'><b:attr name='xmlns' value=''/><b:attr name='xmlns:b' value=''/><b:attr name='xmlns:expr' value=''/><b:attr name='xmlns:data' value=''/><head>
<b:include data='blog' name='JetAll-head-content'/>
<b:if cond='!data:view.isLayoutMode'>
<b:skin><![CDATA[/*

[!] Find (JetAll-head-content) to edit Open Graph and other Meta Tags

---------------------------
# JetTheme v2.9 Setting #
---------------------------

<Variable name="tagline" description="Tagline" type="string" value=""/>
[!] Homepage tagline, ex: BlogName - Tagline

<Variable name="separator" description="Separator" type="string" value=" - "/>
[!] Title separator ( – ), ( | ), ( • )

<Variable name="description" description="Description" type="string" value=""/>
[!] Default meta description, recommended 155–160 characters

<Variable name="recommended" description="recommended" type="string" value="aHR0cHM6Ly93d3cudGhlcmVhbGFud2FydWwuY29tLmJkLw=="/>
[!] Default meta recommended, recommended 155–160 characters

<Variable name="cover" description="Cover" type="string" value=""/>
[!] Default meta image, size recommended 1600x700 px

<Variable name="logo" description="Logo" type="string" value=""/>
[!] Schema logo, size recommended 175x55 px

<Variable name="favicon" description="Favicon" type="string" value=""/>
[!] Favicon high resolution, required format (.png), min size 200x200 px

<Variable name="analyticId" description="Analytic ID" type="string" value=""/>
[!] New Google Analytic 2021

<Variable name="caPubAdsense" description="caPubAdsense ID" type="string" value=""/> 
[!] number only

<Variable name="autoTOC" description="Table of content" type="string" value="true"/>
[!] true or false

<Variable name="positionTOC" description="Position TOC" type="string" value="noscript"/>
[!] tag name, class, id

<Variable name="maxLabel" description="Limit Label" type="string" value="3"/>
[!] Limit Label Display

-------------------------
# JetTheme Css Variable #
-------------------------

<Group description="_Main Color">
<Variable name="keycolor" description="Main Color" type="color" default="#0b93e9" value="#0b93e9"/>
<Variable name="body.background" description="Body Background Color" type="color" default="#c4e9ff" value="#c4e9ff"/>
<Variable name="body.text.color" description="Font Color" type="color" default="#000000" value="#000000"/>
<Variable name="posts.title.color" description="Heading Color" type="color" default="#000000" value="#000000"/>
<Variable name="body.link.color" description="Link Color" type="color" default="$(keycolor)" value="#1400ff"/>
<Variable name="body.hover.color" description="Link Hover" type="color" default="#0373b9" value="#0373b9"/>
<Variable name="border.color" description="Border Color" type="color" default="#ececec" value="#ececec"/>
<Variable name="posts.text.color" description="Blockquote Border Color" type="color" default="$(keycolor)" value="#0373b9"/>
</Group>

<Group description="_Typography">
<Variable name="body.text" description="Body Font" type="font" default="normal normal 16px system-ui,-apple-system,Segoe UI,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" value="normal normal 16px system-ui,-apple-system,Segoe UI,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"/>
<Variable name="posts.title" description="Heading Font" type="font" default="normal bold 40px var(--bs-font-sans-serif)" value="normal bold 40px var(--bs-font-sans-serif)"/>
<Variable name="title.h2" description="H2 Size" type="length" default="26px" min="12px" max="50px" value="26px"/>
<Variable name="title.h3" description="H3 Size" type="length" default="22px" min="12px" max="50px" value="22px"/>
<Variable name="title.h4" description="H4 Size" type="length" default="20px" min="12px" max="50px" value="20px"/>
<Variable name="title.h5" description="H5 Size" type="length" default="18px" min="12px" max="50px" value="18px"/>
<Variable name="title.h6" description="H6 Size" type="length" default="16px" min="12px" max="50px" value="16px"/>
</Group> 

<Group description="_Logo">
<Variable name="logo.width" description="Logo Max Width" type="length" default="200px" min="50px" max="500px" value="200px"/>
<Variable name="logo.width.mobile" description="Logo Max Width (mobile)" type="length" default="150px" min="50px" max="500px" value="150px"/>
</Group>

<Group description="_Header Color">
<Variable name="header.bg" description="Background" type="color" default="#0373b9" value="#0373b9"/>
<Variable name="header.color" description="Font Color " type="color" default="#ffffff" value="#ffffff"/>
<Variable name="header.border" description="Border Color" type="color" default="#0b93e9" value="#0b93e9"/>
</Group>

<Group description="_Menu">
<Variable name="tabs.font" description="Menu Font" type="font" default="normal bold 16px var(--bs-font-sans-serif)" value="normal bold 16px var(--bs-font-sans-serif)"/>
<Variable name="tabs.color" description="Font Color" type="color" default="$(body.text.color)" value="#ffffff"/>
<Variable name="tabs.hover" description="Font Hover" type="color" default="$(keycolor)" value="#fff000"/>
<Variable name="tabs.selected.color" description="Font Selected" type="color" default="$(keycolor)" value="#fff000"/>
</Group>

<Group description="_Dropdown Menu">
<Variable name="dropdown.font" description="Font Size" type="length" default="16px" min="12px" max="50px" value="15px"/>
<Variable name="dropdown.bg" description="Background Color" type="color" default="$(body.text.color)" value="#0373b9"/>
<Variable name="dropdown.color" description="Font Color" type="color" default="$(keycolor)" value="#ffffff"/>
<Variable name="dropdown.hover" description="Font Hover" type="color" default="$(keycolor)" value="#fff000"/>
<Variable name="dropdown.selected" description="Dropdown Selected Color" type="color" default="$(keycolor)" value="#f67938"/>
</Group>

<Group description="_Footer Color">
<Variable name="footer.bg" description="Background Color" type="color" default="#0373b9" value="#0373b9"/>
<Variable name="footer.color" description="Font Color" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="footer.link" description="Link Color" type="color" default="transparent" value="transparent"/>
<Variable name="footer.border" description="Border Color" type="color" default="#FFFFFF" value="#FFFFFF"/>
</Group>

<Group description="_Socket Color">
<Variable name="socket.bg" description="Background Color" type="color" default="#0b93e9" value="#0b93e9"/>
<Variable name="socket.color" description="Font Color" type="color" default="#FCE8B2" value="#FCE8B2"/>
</Group>

<Group description="_Button">
<Variable name="posts.icons.color" description="Button Color" type="color" default="$(keycolor)" value="#0373b9"/>
<Variable name="labels.background.color" description="Button Hover"  type="color"  default="#0b93e9" value="#0b93e9"/>
</Group>

<Group description="_Comment Form">
<Variable name="body.text.font" description="Font" type="font" default="normal normal 14px system-ui,-apple-system,Segoe UI,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" value="normal normal 14px system-ui,-apple-system,Segoe UI,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"/>
<Variable name="posts.background.color" description="Background" type="color" default="transparent" value="rgba(0,0,0,0)"/>
</Group>
*/
/*
-----------------------------------------------
JetTheme Blogger Template
Name		: JetTheme Core
Version		: 2.9
Designer	: jettheme
URL			: www.jettheme.com
-----------------------------------------------
*/

:root {
--bs-font-sans-serif: $(body.text.family);
--bs-body-bg: $(body.background);
--bs-body-color: $(body.text.color);
--jt-primary: $(keycolor);
--jt-heading-color: $(posts.title.color);
--jt-heading-link: $(posts.title.color);
--jt-heading-hover: $(keycolor);
--jt-link-color: $(body.link.color);
--jt-link-hover: $(body.hover.color);
--jt-blockquote: $(posts.text.color);
--jt-btn-primary: $(posts.icons.color);
--jt-btn-primary-hover: $(labels.background.color);
--jt-btn-light-hover: $(posts.title.color);
--jt-border-light: $(border.color);
--jt-bg-light: #f3f7f9;
--jt-archive-bg: #ffffff;
--jt-nav-color: $(tabs.color);
--jt-nav-hover: $(tabs.hover);
--jt-nav-selected: $(tabs.selected.color);
--jt-dropdown-bg: $(dropdown.bg);
--jt-dropdown-color: $(dropdown.color);
--jt-dropdown-hover: $(dropdown.hover);
--jt-dropdown-selected: $(dropdown.selected);
--jt-header-bg: $(header.bg);
--jt-header-color: $(header.color);
--jt-header-border: $(header.border);
--jt-footer-bg: $(footer.bg);
--jt-footer-color: $(footer.color);
--jt-footer-link: $(footer.link);
--jt-footer-border: $(footer.border);
--jt-socket-bg: $(socket.bg);
--jt-socket-color: $(socket.color);
}

.dark-mode {
--bs-body-bg: hsl(210, 11%, 15%);
--bs-body-color: hsl(210, 11%, 80%);
--jt-heading-color: hsl(210, 11%, 80%);
--jt-heading-link: hsl(210, 11%, 80%);
--jt-btn-light-hover: hsl(210, 11%, 85%);
--jt-border-light: hsl(210, 11%, 20%);
--jt-bg-light: hsl(210, 11%, 20%);
--jt-archive-bg: hsl(210, 11%, 17%);
--jt-nav-color: hsl(210, 11%, 70%);
--jt-dropdown-bg: hsl(210, 11%, 18%);
--jt-dropdown-color: hsl(210, 11%, 70%);
--jt-header-bg: hsl(210, 11%, 15%);
--jt-header-color: hsl(210, 11%, 80%);
--jt-header-border: hsl(210, 11%, 20%);
--jt-footer-bg: hsl(210, 11%, 15%);
--jt-footer-color: hsl(210, 11%, 80%);
--jt-footer-border: hsl(210, 11%, 20%);
--jt-socket-bg: hsl(210, 11%, 17%);
--jt-socket-color: hsl(210, 11%, 80%);
}
body {
font: normal normal 17px Kalpurush, sans-serif;
color: var(--bs-body-color);
background-color: var(--bs-body-bg);
line-height: 1.5;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
}
.d-block {
display:none;
}
.h1,.h2,.h3,.h4,.h5,.h6,
h1,h2,h3,h4,h5,h6 {
font: normal bold 22px var(--bs-font-Kalpurush);
}
a {
transition-property: background-color, border-color, color, fill, stroke;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
text-decoration: none;
color: var(--jt-link-color);
}
a:hover {
color: var(--jt-link-hover);
}
.fs-7 {
font-size: 16px;
}
.fs-8 {
font-size: 0.75rem;
}
.fs-9 {
font-size: 0.7rem;
}
#comment-button {
width: 100%!important;
}
.link-oit-btn{
color: var(--jt-nav-color);
background-color: var(--jt-header-bg);
width:100%;
margin-left:0;
margin-right:0;
padding:5px;
display:block;
text-align:center;
border-radius:6px;
border-right: 3px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
}
.link-oit-btn:hover{
color: var(--jt-nav-color);
background-color: var(--jt-socket-bg);
}
.btn{
box-shadow: none !important
}
.btn-block{
width: 100%!important;
color: var(--jt-nav-color);
background-color: var(--jt-header-bg);
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-block:hover{
background-color: var(--jt-socket-bg);
}
.btn-oit-r{
width: 100%;
color: var(--jt-nav-color);
background-color: red;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-r:hover{
background-color: var(--jt-socket-bg);
}
.btn-oit-g{
width: 100%;
color: var(--jt-nav-color);
background-color: green;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-g:hover{
background-color: var(--jt-socket-bg);
}
.btn-oit-y{
width: 100%;
color: var(--jt-heading-color);
background-color: yellow;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-y:hover{
color: var(--jt-nav-color);
background-color: var(--jt-socket-bg);
}
.btn-oit-o{
width: 100%;
color: var(--jt-nav-color);
background-color: orange;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-o:hover{
color: var(--jt-nav-color);
background-color: var(--jt-socket-bg);
}
.btn-oit-p{
width: 100%;
color: var(--jt-nav-color);
background-color: purple;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-p:hover{
color: var(--jt-nav-color);
background-color: var(--jt-socket-bg);
}
.btn-oit-b{
width: 100%;
color: var(--jt-nav-color);
background-color: blue;
border-radius: 6px!important;
border-top: 0px solid var(--jt-heading-color);
border-right: 3px solid var(--jt-heading-color);
border-bottom: 0px solid var(--jt-heading-color);
border-left: 3px solid var(--jt-heading-color);
padding: 5px;
margin: 0px 0px 5px 0px;
}
.btn-oit-b:hover{
color: var(--jt-nav-color);
background-color: var(--jt-socket-bg);
}
.btn-sm {
min-width: 32px;
min-height: 32px;
}
img,
svg,
iframe {
max-width:100%
}
img {
height:auto;
object-fit:cover;
}
label {
cursor: pointer;
}
.visually-hidden {
position: unset !important;
}
.form-control:focus {
box-shadow: none;
border-color: var(--jt-primary);
}
.form-control::placeholder {
opacity: 0.5;
color:white;
}
.dropdown-toggle::after {
border-width: 0.25em 0.25em 0;
}
.dropdown-menu {
margin: 0;
padding: 0;
}
.py-5 {
padding-top: 1rem!important;
padding-bottom: 0rem!important;
}
.pb-5 {
padding-bottom: 1rem!important;
}
.border-bottom {
border-bottom: 1px solid var(--jt-header-bg)!important;
}
.border-top {
border-top: 1px solid var(--jt-header-bg)!important;
}
#Label10{
font: normal normal 16px Kalpurush, sans-serif;
}
.sdw-oit {
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px!important;
}
.rounded {
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px!important;
border: 0.1px solid var(--jt-socket-bg)!important;
border-radius: 6px!important;
}
#threaded-comment-form{
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
border: 0.1px solid var(--jt-socket-bg);
}
#post-pager, .breadcrumb, #single-content, #page-content, #PageList1, #Label10, #HTML1,  #HTML4 {
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
background-color: var(--jt-bg-light);
border: 0.1px solid var(--jt-socket-bg)!important;
padding: 7px;
border-radius: 6px;
}
#comments, .related-posts{
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
background-color: rgba(3, 115, 185, 0.1);
border: 0.1px solid var(--jt-socket-bg);
padding: 7px;
border-radius: 6px;
}
.px-3 {
padding-right: .5rem!important;
padding-left: .5rem!important;
}
.border-start {
border-left: 5px solid var(--jt-footer-bg)!important;
}
.alert {
background-color: rgba(3, 115, 185, 0.1);
border-left: 5px solid var(--jt-header-bg);
border-right: 5px solid var(--jt-header-bg);
border-top: 0px solid var(--jt-header-bg);
border-bottom: 0px solid var(--jt-header-bg);
border-radius: 10px;
margin-bottom: 0rem;
padding: 0.5rem;
}
ul {
list-style-type: square;
padding-left: 20px!important;
}
.list-unstyled{
padding-left: 5px!important;
}
.widget-content ul li a:hover{
color: var(--jt-nav-color)!important;
background-color: var(--jt-header-bg);
padding: 5px;
border-radius: 6px;
border: 1px solid var(--jt-nav-color)!important;
}
.alert li a:hover{
color: var(--jt-nav-color)!important;
background-color: var(--jt-header-bg);
padding: 5px;
border-radius: 6px;
}
ol li a:hover{
color: var(--jt-nav-color)!important;
background-color: var(--jt-header-bg);
padding: 5px;
border-radius: 6px;
border: 1px solid var(--jt-nav-color)!important;
}
img:hover{
border-radius: 5%;
opacity: 0.9!important;
}
.alert-oit-y {
color: black;
background-color: yellow;
border-left: 5px solid var(--jt-header-bg);
border-right: 5px solid var(--jt-header-bg);
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
.alert-oit-r {
color: white;
background-color: red;
border-left: 5px solid var(--jt-heading-color);
border-right: 5px solid var(--jt-heading-color);
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
.ph-oit-b {
background-color: rgba(3, 115, 185, 0.3);
border: 1px solid #0373b9;
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
.ph-oit-g {
background-color: rgba(43, 131, 0, 0.3);
border: 1px solid #2b8300;
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
.ph-oit-y {
background-color: rgba(255, 242, 0, 0.3);
border: 1px solid #ffba00;
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
.ph-oit-r {
background-color: rgba(255, 0, 0, 0.3);
border: 1px solid red;
border-radius: 10px;
margin: 5px 0px 5px 0px;
padding: 10px;
text-align: justify;
}
body {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
.navbar-brand:hover {
opacity: 0.8;
}
tr:nth-child(even) {background-color: rgba(3, 115, 185, 0.1);}
tr:hover {background-color: rgba(3, 115, 185, 0.5);}
th {background-color: var(--jt-header-bg)!important;}
.p-4{
padding:1rem 1rem 0rem 1rem!important;
}
#footer .widget-title {
background-color: var(--jt-socket-bg);
font-size: 17px !important;
border-bottom: 5px ridge var(--jt-header-color);
border-radius: 6px 6px 20px 20px;
padding: 10px 0px 0px 10px;
}
#sidebar .widget-title {
color: var(--jt-header-color);
background-color: var(--jt-header-bg);
font-size: 17px !important;
border-bottom: 5px ridge var(--jt-nav-color);
border-radius: 6px 6px 20px 20px;
padding: 5px 0px 0px 10px;
}
.ratio:before{
content: none;
}
.ratio-1x1 {
padding-bottom: 100%;
}
.ratio-4x3 {
padding-bottom: 75%;
}
.ratio-16x9 {
padding-bottom: 56.25%;
}
.ratio-21x9 {
padding-bottom: 43%;
}
.copyordinaryit {
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
}
.object-cover {
object-fit: cover;
}
.jt-text-primary,
.hover-text-primary:hover,
input:checked ~ .check-text-primary {
color: var(--jt-primary)!important
}
.jt-btn-primary,
.jt-btn-outline-primary:hover {
color: #fff;
background-color: var(--jt-btn-primary);
border-color: var(--jt-btn-primary);
}
.jt-btn-light {
color: var(--bs-body-color);
background-color: var(--jt-nav-color);
border: 2px ridge var(--jt-socket-bg);
}
.jt-btn-light:hover {
color: var(--jt-btn-light-hover);
}
.jt-btn-primary:hover,
.hover-btn-primary:hover,
input:checked + .jt-btn-outline-primary {
color: #fff !important;
background-color: var(--jt-btn-primary-hover)!important;
border-color: var(--jt-btn-primary-hover)!important
}
.jt-btn-outline-primary {
color: var(--jt-btn-primary);
border-color: var(--jt-btn-primary);
}
.jt-bg-primary {
background-color: var(--jt-primary)
}
.jt-bg-light {
background-color: var(--jt-bg-light)
}
.bg-archive {
background-color: var(--jt-archive-bg)
}
.jt-border-light {
border-bottom: 3px solid var(--jt-header-bg)!important;
}
input:checked ~ .d-block-check {
display: block !important;
}
input:checked ~ .d-none-check {
display: none !important;
}
.dropdown-menu,
.accordion-item,
.accordion-header {
background-color: var(--bs-body-bg);
color: var(--bs-body-color);
border-color: var(--jt-border-light);
}
.lazyload {
transition-property: opacity;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
opacity: 0;
}
.lazyload.loaded {
opacity: 1;
}
/* JetTheme Style */
pre {
background-color: var(--jt-bg-light);
margin-bottom: 1rem;
padding: 1rem;
font-size: 0.75rem;
}
blockquote {
border-left:  5px solid var(--jt-blockquote);
color: inherit;
font-size: 1.125rem;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
padding-left: 1rem;
}
.header-animate.header-hidden {
transform: translateY(-100%);
box-shadow: none !important;
}
#header {
background-color: var(--jt-header-bg);
color: var(--jt-header-color);
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
height: 50px;
border-bottom: 5px ridge var(--jt-footer-border);
border-radius: 0px 0px 20px 20px;
opacity: 0.95;
}
.header-social {
border-right: 2px ridge var(--jt-header-border);
}
.jt-icon {
display: inline-block;
height: 1em;
vertical-align: -0.15em;
width: 1em;
fill:none;
stroke:currentColor;
stroke-linecap:round;
stroke-linejoin:round;
stroke-width:2;
}
.jt-icon-center {
font-family: roboto;
}
.icon-dark,
.dark-mode .icon-light {
display: none;
}
.dark-mode .icon-dark {
display: block;
}
#dark-toggler,
#search-toggler,
#navbar-toggler {
line-height: 1;
}
#dark-toggler {
font-size: 17px;
}
#footer {
background-color: var(--jt-footer-bg);
color: var(--jt-footer-color);
border-top: 5px ridge var(--jt-footer-border);
border-radius: 20px 20px 0px 0px;
}
.pt-4 {
padding-top: 1rem!important;
}
#socket {
background-color: var(--jt-socket-bg);
color: var(--jt-socket-color);
border-top: 5px ridge var(--jt-footer-border);
border-radius: 20px 20px 0px 0px;
font: normal normal 16px roboto, sans-serif;
}
#navbar {
z-index: 9999;
}
#navbar .menu-item {
position: relative;
}
#navbar .nav-link {
min-height: 40px;
}
#navbar .dropdown-toggle {
cursor: pointer;
align-items: center;
display: flex;
}
#navbar.d-block,
#navbar .dropdown-menu,
#navbar .nav-link,
#navbar .dropdown-toggle {
-webkit-transition: .3s;
-ms-transition: .3s;
-o-transition: .3s;
transition: .3s;
}
#navbar .navbar-nav > .menu-item > .nav-link {
font: normal bold 16px var(--bs-font-Kalpurush);
line-height: 1.5;
color: var(--jt-nav-color);
}
#navbar .navbar-nav > .menu-item:hover > .nav-link,
#navbar .navbar-nav > .menu-item:hover > .dropdown-toggle {
color: var(--jt-nav-hover);
}
#navbar .navbar-nav > .menu-item > .nav-link.active,
#navbar .navbar-nav > .menu-item > .active ~ .dropdown-toggle {
color: var(--jt-nav-selected);
}
.logo-wrap {
width: 200px;
}
#search-header .dropdown-menu {
background-color:var(--jt-dropdown-bg);
color: var(--jt-dropdown-color);
border: 3px ridge var(--jt-header-border);
min-width: 300px;
right:0;
top:100%
}
.blog-admin {
display: none;
}
#pagination li + li {
margin-left: 5px;
}
.no-items {
display: none;
}
.feature-image,
.separator,
.tr-caption-container {
margin-bottom: 1rem;
}
.tr-caption-container {
width: 100%;
}
.separator a,
.tr-caption-container a {
margin: 0 !important;
padding: 0 !important;
}
.tr-caption {
font-size: 12px;
font-style: italic;
}
.widget:last-child {
margin-bottom: 0 !important;
}
#post-body .widget {
margin-top: 1.5rem;
}
.item-title {
color: var(--jt-heading-link);
}
.item-title:hover {
color: var(--jt-heading-hover);
}
#comment-editor{
width:100%
}
#primary .widget-title {
font-weight: 300;
text-transform: uppercase;
}
#footer .widget-title {
text-transform: uppercase;
}
#footer .widget-title,
#sidebar .widget-title {
font-size: 17px !important;
}
#footer .widget-title:after {
content: "";
display: block;
width: 100%;
margin-top: 5px;
}
#primary .widget-title > span {
padding-right: 5px;
position: relative;
}
#main .widget-title:before,
#sidebar .widget-title:before {
/* background-color:  var(--jt-bg-light); */

height: 1px;
display: block;
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 100%;
}
#main .widget-title:before {
border-right: 30px solid var(--jt-primary);
height: 5px;
}
.send-success:not(.loading) .contact-form-msg,
.send-error:not(.loading) .contact-form-msg {
display:block !important;
}
.send-success .contact-form-msg{
border-color: rgba(25,135,84,.3) !important;
}
.send-error .contact-form-msg{
border-color: rgba(255,193,7,.3) !important;
}
.send-success .contact-form-msg:before{
content: attr(data-success);
}
.send-error .contact-form-msg:before{
content: attr(data-error);
}
hr.example-ads:before {
content: "Advertisement here";
}
hr.example-ads {
background-color: var(--jt-bg-light);
border-radius: 0.25rem;
font-size: 0.875rem;
height: auto;
margin: 0;
opacity: 1;
padding: 1.5rem 0;
text-align: center;
}
body > .google-auto-placed {
margin: 0 auto 1.5rem;
max-width: 1108px;
}
.google-auto-placed > ins {
margin: 0 !important;
}
/* TYPOGRAPY */
.h1,h1{font-size:calc(1rem + 1vw)}
.h2,h2{font-size:calc(1rem + .7vw)}
.h3,h3{font-size:calc(1rem + .6vw)}
.h4,h4{font-size:calc(1rem + .3vw)}
.h5,h5{font-size:18px}
.h6,h6{font-size:17px}
.entry-title {
color: var(--jt-heading-color);
margin-bottom: -20px;
}
#page-content .entry-title{
margin-bottom: 0px;
}
.entry-text h1,
.entry-text h2,
.entry-text h3,
.entry-text h4,
.entry-text h5,
.entry-text h6 {
color: var(--jt-heading-color);
margin-top: 1rem;
margin-bottom: 0.3rem;
background-color: rgba(3, 115, 185, 0.03);
border-bottom: 0px solid black;
border-left: 5px solid black;
border-radius: 10px 5px 5px 10px;
padding: 5px 10px 0 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.entry-text li {
margin-bottom: 0.5rem;
}
/* Responsive Style */
@media (min-width: 576px) {
.ratio-sm-4x3 {
padding-bottom: 75%;
}
.ratio-sm-16x9 {
padding-bottom: 56.25%;
}
.border-sm-end {
border-right-width: 1px !important;
border-right-style: solid;
}
#post-pager .next-page {
border-left: 1px solid;
}
}
@media (min-width: 768px) {
.position-md-relative {
position: relative;
}
.border-md-end {
border-right-width: 1px !important;
border-right-style: solid;
}
}
@media (min-width: 992px) {
.d-lg-flex {
display: flex;
}
.col-lg-4 {
flex: 0 0 auto;
width: 33.33333333%;
}
.col-lg-8 {
flex: 0 0 auto;
width: 66.66666667%;
}
.border-lg-end {
border-right-width: 1px !important;
border-right-style: solid;
}
#navbar .navbar-nav > .menu-item {
display: flex;
}
#navbar .dropdown-menu {
background-color:var(--jt-dropdown-bg);
border: 3px ridge var(--jt-header-border);
border-radius: 10px!important;
margin-top: -5px!important;
display: block;
opacity: 0;
visibility: hidden;
pointer-events: none;
box-shadow: 5px 10px 10px -5px rgba(0, 0, 0, 0.14);
top:100%;
min-width: 200px;
}
#navbar .dropdown-menu .nav-link {
padding-right: 20px;
font-size: 15px;
color: var(--jt-dropdown-color);
}
#navbar .dropdown-menu .dropdown-toggle {
position: absolute;
right: 10px;
top: 20px;
}
#navbar .dropdown-menu .dropdown-menu {
left: 100%;
top: -1px;
}
#navbar .dropdown-menu .menu-item:hover > .nav-link,
#navbar .dropdown-menu .menu-item:hover > .dropdown-toggle {
color:  var(--jt-dropdown-hover);
}
#navbar .dropdown-menu .menu-item > .nav-link.active,
#navbar .dropdown-menu .menu-item > .active ~ .dropdown-toggle {
color:  var(--jt-dropdown-selected);
}
#navbar .menu-item:hover > .dropdown-menu {
opacity: 0.95;
visibility: visible;
pointer-events: unset;
margin: 0;
}
#navbar .navbar-nav > .menu-item > .nav-link {
padding: 1.5rem 1.2rem;
white-space:nowrap;
}
#navbar .navbar-nav > .menu-item > .dropdown-toggle {
bottom: 0;
pointer-events: none;
position: absolute;
right: 5px;
top: 3px;
}
#sidebar {
border-left: 0px solid var(--jt-border-light);
}
#footer-widget .widget {
margin-bottom: 0 !important;
}
}
@media (min-width: 1200px){
.container {
max-width: 1140px;
}
.h1,h1{font-size:22px}
.h2,h2{font-size:22px}
.h3,h3{font-size:20px}
.h4,h4{font-size:19px}
}
@media (min-width: 1400px) {
.container {
max-width: 1320px;
}
}
@media (max-width: 991.98px) {
input:checked ~ .dropdown-menu {
display: block;
}
input:checked + .dropdown-toggle {
color: var(--jt-dropdown-selected);
}
.logo-wrap {
width: 190px;
}
#search-header .dropdown-menu{
margin-top: 15px;
width: 100%;
}
#navbar {
background-color: var(--jt-header-bg);
padding-top: 70px;
padding-bottom: 30px;
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: auto;
}
#navbar.d-block {
opacity: 0;
transform: translateX(-20%);
}
#navbar.show {
transform: translateX(0);
opacity: 1;
}
#navbar .navbar-nav {
max-height: 100%;
overflow-y: auto;
}
#navbar-toggle:checked ~ #header-main #navbar {
display:block;
}
#navbar .nav-link {
border-bottom: 1px solid var(--jt-header-border);
font-size: 16px !important;
color: var(--jt-dropdown-color);
}
#navbar .menu-item:hover > .nav-link {
color: var(--jt-dropdown-hover);
}
#navbar .active > .nav-link {
color: var(--jt-dropdown-selected);
}
#navbar .dropdown-toggle {
border-left: 1px solid var(--jt-header-border);
height: 2.5rem;
padding: 0 1rem;
position: absolute;
right: 0;
top: 0;
}
#navbar .dropdown-menu {
background-color: var(--jt-dropdown-bg);
border: none;
padding-left: 10px;
}
#sidebar {
border-top: 0px solid var(--jt-border-light);
}
}
@media (max-width: 575.98px) {
.feature-posts .item-thumbnail {
margin-bottom: -150px;
}
.feature-posts .item-thumbnail a {
border-radius: 0 !important;
box-shadow: none !important;
padding-bottom: 75%;
}
.feature-posts .item-content {
background-color: var(--bs-body-bg);
border: 5px solid;
border-radius: 0.25rem;
}
#post-pager .prev-page + .next-page {
border-top: 1px solid;
}
.full-width,
.px-3 .google-auto-placed {
margin-left: -1rem;
margin-right: -1rem;
width: auto !important;
}
#footer-widget .widget {
padding-left: 3rem;
padding-right: 3rem;
}
}
/*Your custom CSS is here*/

]]></b:skin>
</b:if>
<b:if cond='data:view.isLayoutMode'>
<b:template-skin><![CDATA[
body#layout .section h4 {
display: none;
}
body#layout.ltr div.section {
border: 0 none;
margin: 0;
}
body#layout .no-items {
display: block;
}
body#layout.ltr div.layout-widget-description {
font-size: 10px;
}
body#layout.ltr .draggable-widget .widget-wrap3{
margin:0;
}
body#layout:before {
background-color: #0b93e9;
border-radius: 30px;
color: #fff;
content: "JetTheme Version 2.9";
display: block;
font-family: Roboto,sans-serif;
padding: 10px 20px;
position: absolute;
right: 15px;
top: 15px;
}
body#layout #header:before,
body#layout #blog-post:before,
body#layout #sidebar-static:before,
body#layout #sidebar-sticky:before,
body#layout #footer:before,
body#layout #before-blog:before,
body#layout #after-blog:before,
body#layout #before-post:before,
body#layout #jet-options:before,
body#layout #ads-post:before {
font-family: Roboto,sans-serif;
background-color: #0b93e9;
color: #fff;
display: block;
padding: 10px;
}
body#layout #header:before {
content: "Header";
}
body#layout #blog-post:before {
content: "Post";
}
body#layout #sidebar-static:before {
content: "Sidebar ";
}
body#layout #sidebar-sticky:before {
content: "Sticky Sidebar";
}
body#layout #footer:before {
content: "Footer";
}
body#layout #before-blog:before {
content: "Before Blog";
}
body#layout #after-blog:before {
content: "After Blog";
}
body#layout #before-post:before {
content: "Before Post";
}
body#layout #jet-options:before {
content: "JetTheme Settings";
}
body#layout #ads-post:before {
content: "Advertisements Inner Post";
}
body#layout #header-main {
display: flex;
}
body#layout #header-main>.widget {
width: 50%;
}
]]></b:template-skin>
</b:if>
<b:defaultmarkups>
<b:defaultmarkup type='Common'>
<b:includable id='JetAll-head-content'>
<script>/*<![CDATA[*/function rmurl(e,t){var r=new RegExp(/\?m=0|&m=0|\?m=1|&m=1/g);return r.test(e)&&(e=e.replace(r,""),t&&window.history.replaceState({},document.title,e)),e}const currentUrl=rmurl(location.toString(),!0);null!==localStorage&&"dark"==localStorage.getItem("theme")&&(document.querySelector("html").className="dark-mode");/*]]>*/</script>
<meta expr:content='&quot;text/html; charset=&quot; + data:blog.encoding' http-equiv='Content-Type'/>
<meta content='width=device-width,initial-scale=1' name='viewport'/>

<!-- Primary Meta Tags -->
<link expr:href='data:view.url.canonical' rel='canonical'/>
<meta expr:content='data:view.url.canonical' property='og:url'/>
<meta expr:content='data:blog.title + &quot; Team&quot;' name='author'/>
<meta expr:content='data:blog.title' name='application-name'/>
<meta expr:content='data:blog.adultContent ? &quot;adult&quot; : &quot;general&quot;' name='rating'/>
      
<!-- Favicon -->
<b:if cond='data:skin.vars.favicon'>
<b:with value='data:skin.vars.favicon' var='favicon'>
<link expr:href='resizeImage(data:favicon,32,&quot;1:1&quot;)' rel='icon' sizes='32x32' type='image/png'/>
<link expr:href='resizeImage(data:favicon,96,&quot;1:1&quot;)' rel='icon' sizes='96x96' type='image/png'/>
<link expr:href='resizeImage(data:favicon,144,&quot;1:1&quot;)' rel='icon' sizes='144x144' type='image/png'/>
<link expr:href='resizeImage(data:favicon,180,&quot;1:1&quot;)' rel='apple-touch-icon' type='image/png'/>
<link expr:href='resizeImage(data:favicon,152,&quot;1:1&quot;)' rel='apple-touch-icon-precomposed' type='image/png'/>
<meta expr:content='resizeImage(data:favicon,150,&quot;1:1&quot;)' name='msapplication-TileImage'/>
</b:with>
<b:else/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
</b:if>

<!-- Theme Color -->
<meta expr:content='data:skin.vars.body_background' name='theme-color'/>
<meta expr:content='data:skin.vars.body_background' name='msapplication-TileColor'/>
<meta expr:content='data:skin.vars.body_background' name='msapplication-navbutton-color'/>
<meta expr:content='data:skin.vars.body_background' name='apple-mobile-web-app-status-bar-style'/>
<meta content='yes' name='apple-mobile-web-app-capable'/>

<!-- Title -->
<b:with value='data:view.isHomepage ? data:blog.title + (data:skin.vars.tagline ? data:skin.vars.separator + data:skin.vars.tagline : &quot;&quot;) : data:view.isError ? &quot;404 (Error) Not Found&quot; + data:skin.vars.separator + data:blog.title : data:blog.pageName ? data:blog.pageName + data:skin.vars.separator + data:blog.title :  &quot;Latest Posts&quot; + data:skin.vars.separator + data:blog.title' var='meta_title'>
<title><data:meta_title/></title>
<meta expr:content='data:meta_title' name='title'/>
<meta expr:content='data:meta_title' property='og:title'/>
<meta expr:content='data:meta_title' name='twitter:title'/>
</b:with>

<!-- Image -->
<b:with value='data:view.featuredImage ?: data:skin.vars.cover' var='meta_image'>
<meta expr:content='data:meta_image' property='og:image'/>
<meta expr:content='data:meta_image' name='twitter:image'/>
</b:with>

<!-- Description -->
<b:with value='data:view.description ?: data:skin.vars.description' var='meta_desc'>
<meta expr:content='data:meta_desc' name='description'/>
<meta expr:content='data:meta_desc' property='og:description'/>
<meta expr:content='data:meta_desc' name='twitter:description'/>
</b:with>

<!-- Open Graph / Facebook -->
<meta content='' property='fb:app_id'/>
<meta content='' property='article:author'/>
<meta content='website' property='og:type'/>
<meta expr:content='data:blog.locale' property='og:locale'/>
<meta expr:content='data:blog.title' property='og:site_name'/>
<meta expr:content='data:view.url.canonical' property='og:url'/>
<meta expr:content='data:view.title' property='og:image:alt'/>

<!-- Twitter -->
<meta content='' name='twitter:site'/>
<meta content='' name='twitter:creator'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta expr:content='data:view.url.canonical' name='twitter:url'/>
<meta expr:content='data:view.title' name='twitter:image:alt'/>

<!-- Feed -->
<data:blog.feedLinks/>

<b:if cond='data:view.isHomepage'>
<script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,&quot;name&quot;:&quot;<data:blog.title/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:blog.canonicalHomepageUrl/>search?q={search_term_string}&amp;max-results=10&quot;,&quot;query-input&quot;:&quot;required name=search_term_string&quot;}}</script>
</b:if>
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' media='print' onload='if(media!=&quot;all&quot;)media=&quot;all&quot;' rel='stylesheet'/><noscript><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'/></noscript>
</b:includable>
</b:defaultmarkup>
</b:defaultmarkups>

<!-- Your Style and Script before </head> is here -->

<b:if cond='!data:view.isPreview'>&lt;/head&gt;&lt;body class=&quot;d-block <b:include name='JetBodyClass'/>&quot;&gt;&lt;textarea disabled readonly id=&quot;element-h&quot; style=&quot;display:none&quot;&gt;&lt;style&gt;/*</b:if></head><body><b:if cond='!data:view.isPreview'>*/&lt;/style&gt;&lt;/textarea&gt;</b:if>

<b:section cond='data:view.isLayoutMode' id='upload-image' showaddelement='no'>
  <b:widget id='Image10' locked='true' title='Upload Image' type='Image' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='displayUrl'>https://1.bp.blogspot.com/-h5fUZDgfXe8/YR87osMq6UI/AAAAAAAAAYk/18JeDAzajvYhKnMnllSf_DSWAm51cueuQCLcBGAsYHQ/s728/placeholder.jpg</b:widget-setting>
      <b:widget-setting name='displayHeight'>425</b:widget-setting>
      <b:widget-setting name='sectionWidth'>1067</b:widget-setting>
      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
      <b:widget-setting name='displayWidth'>728</b:widget-setting>
      <b:widget-setting name='link'>#</b:widget-setting>
      <b:widget-setting name='caption'><![CDATA["Upload image from computer" > Save > Edit Again > Get URL]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetImage'/>
    </b:includable>
    <b:includable id='content'/>
  </b:widget>
</b:section>

<header class='header-animate sticky-top navbar py-0 navbar-expand-lg' content='itemid' id='header' itemid='#header' itemscope='itemscope' itemtype='https://schema.org/WPHeader'>
<input class='d-none' id='navbar-toggle' type='checkbox'/>
<b:section class='container position-relative px-3 flex-nowrap' id='header-main' maxwidgets='3' showaddelement='no'>
  <b:widget id='HTML10' locked='true' title='Logo' type='HTML' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'>https://blogger.googleusercontent.com/img/a/AVvXsEilYomjFvdY8eAlT-Bh3OV1pcsuvwJDCwPIi2wbyeKH_F3WwsVpQwrqzM5v0DTaHq_76uQ8ez_tDL93HMhrEE-zmFBOGCpwjVc0WsGmNQPNCduSUoMkNqp_pLtkwmKgjwYgd0lWlJXdF9CGicQLka96XNw8lFseZB2Ww9cJ4jK8jU8DMDdDZQlQ6lIGTtSP</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
        <b:include name='JetLogo'/>
      </b:includable>
  </b:widget>
  <b:widget id='LinkList10' locked='true' title='Icons, Dark, Search' type='LinkList' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='text-1'>instagram</b:widget-setting>
      <b:widget-setting name='link-1'>https://www.therealanwarul.com.bd/</b:widget-setting>
      <b:widget-setting name='text-0'>facebook</b:widget-setting>
      <b:widget-setting name='link-0'>https://www.therealanwarul.com.bd/</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetSearch'/>
    </b:includable>
    <b:includable id='content'/>
  </b:widget>
  <b:widget id='LinkList11' locked='true' title='Menu' type='LinkList' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='text-8'>য&#2507;গ&#2494;য&#2507;গ</b:widget-setting>
      <b:widget-setting name='link-7'>https://www.therealanwarul.com.bd/p/sitemap.html</b:widget-setting>
      <b:widget-setting name='link-8'>https://www.therealanwarul.com.bd/p/contact.html</b:widget-setting>
      <b:widget-setting name='link-5'>https://www.therealanwarul.com.bd/</b:widget-setting>
      <b:widget-setting name='link-6'>#sub-end</b:widget-setting>
      <b:widget-setting name='link-3'>#sub-start</b:widget-setting>
      <b:widget-setting name='link-4'>https://www.therealanwarul.com.bd/</b:widget-setting>
      <b:widget-setting name='text-1'>সম&#2509;পর&#2509;ক&#2503;</b:widget-setting>
      <b:widget-setting name='text-0'>হ&#2507;ম</b:widget-setting>
      <b:widget-setting name='text-3'>Sub Menu 1</b:widget-setting>
      <b:widget-setting name='text-2'>ট&#2503;ক</b:widget-setting>
      <b:widget-setting name='text-5'>ইন&#2509;ট&#2494;রন&#2503;ট</b:widget-setting>
      <b:widget-setting name='text-4'>ম&#2507;ব&#2494;ইল</b:widget-setting>
      <b:widget-setting name='text-7'>স&#2494;ইটম&#2509;য&#2494;প</b:widget-setting>
      <b:widget-setting name='text-6'>Sub Menu 1</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='link-1'>https://www.therealanwarul.com.bd/p/about.html</b:widget-setting>
      <b:widget-setting name='link-2'>/search/label/Tech?max-results=10</b:widget-setting>
      <b:widget-setting name='link-0'>/</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetMenu'/>
    </b:includable>
    <b:includable id='content'/>
  </b:widget>
</b:section>
</header>

<!--Main Content-->
<div id='primary'>
<div class='container px-0'>
<div class='d-lg-flex' id='main-content'>
<div class='col-lg-8 px-3' id='main'>
<b:if cond='data:view.isMultipleItems and !data:view.isError or !data:numPosts == 0'><b:with value='data:view.isHomepage ? &quot;Homepage &quot; + data:blog.title : data:blog.pageName ? data:blog.pageName : &quot;Latest Posts&quot;' var='auto_heading'><h1 class='d-none'><data:auto_heading/></h1></b:with></b:if>
<b:section class='pt-4' cond='data:view.isMultipleItems and !data:view.search.query' id='before-blog' showaddelement='yes'>
  <b:widget id='HTML11' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='HTML2' locked='false' title='' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="alert sdw-oit"> 
<p style="text-align:center; border-bottom: 1px solid var(--jt-header-bg); margin-bottom:6px;" class="alert sdw-oit">
<b>অর্ডিনারি আইটির সর্বাধিক জনপ্রিয় লিংকসমূহঃ</b>
</p>

<a href="https://www.therealanwarul.com.bd/" aria-label="অর্ডিনারি আইটির সবগুলো চাকরির অফার"><button class="btn-block">👨&zwj;💻 অর্ডিনারি আইটির সবগুলো চাকরির অফার</button></a>
 
<a href="https://www.therealanwarul.com.bd/" aria-label="ওয়েবসাইট ক্রয় করে ৮০,০০০৳ ইনকাম"><button class="btn-block">💰 ওয়েবসাইট ক্রয় করে ৮০,০০০৳ ইনকাম</button></a>

<a href="https://www.therealanwarul.com.bd/" aria-label="ডিজিটাল মার্কেটিং শিখে লাখ টাকা আয়"><button class="btn-block">💸 ডিজিটাল মার্কেটিং শিখে লাখ টাকা আয়</button></a>

<a href="https://www.therealanwarul.com.bd/" aria-label="গুগল এডসেন্স ব্লগিং কোর্স (৪৬ ক্লাস)"><button class="btn-block">🖥️ গুগল এডসেন্স ব্লগিং কোর্স (৪৬ ক্লাস)</button></a>

<a href="https://www.therealanwarul.com.bd/" aria-label="লেখালেখি করে মাসে ১৫,০০০৳ আয়"><button class="btn-block">📝 লেখালেখি করে মাসে ১৫,০০০৳ আয়</button></a>
</div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
</b:section>
<b:section class='pt-4' cond='data:view.isPost' id='before-post' showaddelement='yes'>
  <b:widget id='HTML12' locked='false' title='#Advertisement' type='HTML' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'><b:include name='JetHtml'/></b:includable>
  </b:widget>
</b:section>
<b:section class='pt-4 pb-5' id='blog-post' maxwidgets='1' showaddelement='no'>
  <b:widget id='Blog1' locked='true' title='ব্লগ পোস্টগুলি' type='Blog' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='showDateHeader'>false</b:widget-setting>
      <b:widget-setting name='commentLabel'>Comment</b:widget-setting>
      <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='showShareButtons'>true</b:widget-setting>
      <b:widget-setting name='showCommentLink'>true</b:widget-setting>
      <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='showAuthor'>true</b:widget-setting>
      <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
      <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='timestampLabel'>d MMM, yyyy</b:widget-setting>
      <b:widget-setting name='reactionsLabel'/>
      <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
      <b:widget-setting name='style.layout'>1x1</b:widget-setting>
      <b:widget-setting name='showLabels'>true</b:widget-setting>
      <b:widget-setting name='showLocation'>false</b:widget-setting>
      <b:widget-setting name='postLabelsLabel'/>
      <b:widget-setting name='showTimestamp'>true</b:widget-setting>
      <b:widget-setting name='postsPerAd'>1</b:widget-setting>
      <b:widget-setting name='showBacklinks'>false</b:widget-setting>
      <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='showInlineAds'>false</b:widget-setting>
      <b:widget-setting name='showReactions'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='top'>
      <b:include name='JetBlog'/>
    </b:includable>
    <b:includable id='aboutPostAuthor'/>
    <b:includable id='addComments'/>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentAuthorAvatar'/>
    <b:includable id='commentDeleteIcon'/>
    <b:includable id='commentForm'/>
    <b:includable id='commentFormIframeSrc'/>
    <b:includable id='commentItem'/>
    <b:includable id='commentList'/>
    <b:includable id='commentPicker'/>
    <b:includable id='comments'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='commentsTitle'/>
    <b:includable id='defaultAdUnit'/>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='feedLinks'/>
    <b:includable id='feedLinksBody'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='homePageLink'/>
    <b:includable id='iframeComments'/>
    <b:includable id='inlineAd'/>
    <b:includable id='linkShare'/>
    <b:includable id='manageComments'/>
    <b:includable id='nextPageLink'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='post'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postBody'/>
    <b:includable id='postBodySnippet'/>
    <b:includable id='postCommentsAndAd'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postFooter'/>
    <b:includable id='postFooterAuthorProfile'/>
    <b:includable id='postHeader'/>
    <b:includable id='postJumpLink' var='post'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postMeta'/>
    <b:includable id='postMetadataJSONImage'/>
    <b:includable id='postMetadataJSONPublisher'/>
    <b:includable id='postPagination'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='postTitle'/>
    <b:includable id='previousPageLink'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='threadedCommentForm'/>
    <b:includable id='threadedCommentJs'/>
    <b:includable id='threadedComments'/>
  </b:widget>
</b:section>
<b:section class='d-none' cond='data:view.isPost' id='ads-post' showaddelement='yes'>
  <b:widget id='HTML13' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='HTML14' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='HTML15' locked='false' title='#You may also like' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div data-title="আপনার এটা পছন্দ হতে পারে ..." class="custom-posts related-inline visually-hidden" data-shuffle="3" data-items="10" data-func="related_inline_temp"></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='HTML16' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='HTML17' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
</b:section>
<b:section class='pb-4' cond='data:view.isMultipleItems and !data:view.search.query' id='after-blog' showaddelement='yes'>
  <b:widget id='HTML18' locked='false' title='#Advertisement' type='HTML' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'><b:include name='JetHtml'/></b:includable>
  </b:widget>
</b:section>
</div>
<div class='col-lg-4 px-3 pb-5 separator-main position-relative ms-auto' content='itemid' id='sidebar' itemid='#sidebar' itemscope='itemscope' itemtype='https://schema.org/WPSideBar'>
<b:section class='pt-4' id='sidebar-static' itemscope='itemscope'>
  <b:widget id='PopularPosts10' locked='false' title='Popular Posts' type='PopularPosts' visible='false'>
    <b:widget-settings>
      <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
      <b:widget-setting name='showThumbnails'>true</b:widget-setting>
      <b:widget-setting name='showSnippets'>false</b:widget-setting>
      <b:widget-setting name='timeRange'>LAST_MONTH</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetPopularPosts'/>
    </b:includable>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='linkShare'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postJumpLink'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='snippetedPostByline'/>
    <b:includable id='snippetedPostContent'/>
    <b:includable id='snippetedPostThumbnail'/>
    <b:includable id='snippetedPostTitle'/>
    <b:includable id='snippetedPosts'/>
  </b:widget>
  <b:widget id='Label10' locked='false' title='জনপ্রিয় ব্লগ ক্যাটাগরি' type='Label' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
      <b:widget-setting name='display'>LIST</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'/>
      <b:widget-setting name='showType'>ALL</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetLabel'/>
    </b:includable>
    <b:includable id='cloud'/>
    <b:includable id='content'/>
    <b:includable id='list'/>
  </b:widget>
  <b:widget id='HTML1' locked='false' title='অর্ডিনারি আইটির জনপ্রিয় লিংকসমূহ' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<ul>
<li>
<a href="https://www.therealanwarul.com.bd/">
👨&zwj;💻 অর্ডিনারি আইটির সমস্ত চাকরির অফার
</a>
</li>
<li>
<a href="https://www.therealanwarul.com.bd/">
💰 ওয়েবসাইট ক্রয় করে ৮০,০০০৳ আয়
</a>
</li>
<li>
<a href="https://www.therealanwarul.com.bd/">
💸 ডিজিটাল মার্কেটিং শিখে লাখ টাকা আয়
</a>
</li>
<li>
<a href="https://www.therealanwarul.com.bd/">
📝 লেখালেখি করে মাসে ১৫,০০০৳ আয়
</a>
</li>
<li>
<a href="https://www.therealanwarul.com.bd/">
🖥️ গুগল অ্যাডসেন্স ব্লগিং কোর্স (৪৬ ক্লাস)
</a>
</li>
</ul>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
  <b:widget id='Label11' locked='false' title='Hashtag' type='Label' visible='false'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
      <b:widget-setting name='display'>CLOUD</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'/>
      <b:widget-setting name='showType'>ALL</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetLabel'/>
    </b:includable>
    <b:includable id='cloud'/>
    <b:includable id='content'/>
    <b:includable id='list'/>
  </b:widget>
  <b:widget id='BlogArchive10' locked='false' title='Blog Archive' type='BlogArchive' visible='false'>
    <b:widget-settings>
      <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
      <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
      <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
      <b:widget-setting name='monthPattern'>MMM yyyy</b:widget-setting>
      <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
      <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
      <b:widget-setting name='chronological'>false</b:widget-setting>
      <b:widget-setting name='showPosts'>false</b:widget-setting>
      <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='this'>
      <b:include name='JetBlogArchive'/>
    </b:includable>
    <b:includable id='content'/>
    <b:includable id='flat'/>
    <b:includable id='hierarchy'/>
    <b:includable id='interval'/>
    <b:includable id='posts'/>
  </b:widget>
  <b:widget id='HTML19' locked='false' title='#Recent Post' type='HTML' visible='false'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div data-title="Recent Post" class="custom-posts visually-hidden" data-items="5" data-func="sidebar_temp"></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
</b:section>
<b:section class='position-sticky py-4 top-0' id='sidebar-sticky' itemscope='itemscope'>
  <b:widget id='HTML20' locked='false' title='#Advertisement' type='HTML' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<div class="widget-content text-break"><a href="https://www.therealanwarul.com.bd/" aria-label="PostAd"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvXQTM1AfG3t1lx0-H5VuPo3-_L5x8jA8spKs33LRBkFHhTPBlO_K8XUT9ZgdZjplkGsGRotaGxxpvAJP1sDfb4KmKfHwzAE67ggBi-6UYQlvTqkr027l5HSGNjsQBZWEK492qDrUO3XmF-ICh4PXFPSwHB_UTZnSJhGuLgixyue9gHv-F2qejzGWeTS/s1600/%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B2%E0%A6%BE%E0%A6%96-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%AF%E0%A6%BC-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%81%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%86%E0%A6%87%E0%A6%9F%E0%A6%BF.gif" alt="PostAd" /></a></div>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:widget>
</b:section>
</div>
</div>
</div>
</div>
<!--Main Content End-->

<footer content='itemid' id='footer' itemid='#footer' itemscope='itemscope' itemtype='https://schema.org/WPFooter'>
<div class='py-5 fs-7' id='footer-main'>
  <div class='container px-3'>
    <b:section class='row row-cols-sm-2 row-cols-lg-4 justify-content-evenly' id='footer-widget' showaddelement='yes'>
      <b:widget id='HTML21' locked='false' title='সম্পর্কে' type='HTML' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'><![CDATA[<p>ফুলস্ট্যাক ডিজিটাল মার্কেটিং কোম্পানি এবং ফ্রিল্যান্সিং ইনস্টিটিউট। </p>]]></b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
      </b:widget>
      <b:widget id='LinkList13' locked='false' title='যোগাযোগ ও নীতিমালা' type='LinkList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='link-3'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-1'>ট&#2495;ম ম&#2503;ম&#2509;ব&#2494;রদ&#2503;র ত&#2494;ল&#2495;ক&#2494;</b:widget-setting>
          <b:widget-setting name='link-1'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='text-0'>আম&#2494;দ&#2503;র ফট&#2507; গ&#2509;য&#2494;ল&#2494;র&#2495;</b:widget-setting>
          <b:widget-setting name='link-2'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='text-3'>য&#2507;গ&#2494;য&#2507;গ&#2503;র সব ঠ&#2495;ক&#2494;ন&#2494;</b:widget-setting>
          <b:widget-setting name='link-0'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='text-2'>গ&#2507;পন&#2496;য়ত&#2494; ও ন&#2496;ত&#2495;ম&#2494;ল&#2494;</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:class name='ps-lg-5'/>
      <b:include name='JetLinkList'/>
    </b:includable>
        <b:includable id='content'/>
      </b:widget>
      <b:widget id='LinkList14' locked='false' title='আমাদের অনুসরণ করুন' type='LinkList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='text-8'>youtube</b:widget-setting>
          <b:widget-setting name='link-7'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-8'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-5'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-6'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-3'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-4'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='text-1'>github</b:widget-setting>
          <b:widget-setting name='text-0'>facebook</b:widget-setting>
          <b:widget-setting name='text-3'>linkedin</b:widget-setting>
          <b:widget-setting name='text-2'>instagram</b:widget-setting>
          <b:widget-setting name='text-5'>telegram</b:widget-setting>
          <b:widget-setting name='text-4'>pinterest</b:widget-setting>
          <b:widget-setting name='text-7'>twitter</b:widget-setting>
          <b:widget-setting name='text-6'>tumblr</b:widget-setting>
          <b:widget-setting name='sorting'>ALPHABETICAL</b:widget-setting>
          <b:widget-setting name='link-1'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-2'>https://www.therealanwarul.com.bd/</b:widget-setting>
          <b:widget-setting name='link-0'>https://www.therealanwarul.com.bd/</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='JetSocial'/>
        </b:includable>
        <b:includable id='content'/>
      </b:widget>
      <b:widget id='HTML3' locked='false' title='উদ্দেশ্য' type='HTML' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'>প&#2509;র&#2494;ত&#2495;ষ&#2509;ঠ&#2494;ন&#2495;ক ভ&#2494;ব&#2503; ফ&#2509;র&#2495;ল&#2509;য&#2494;ন&#2509;স&#2495;&#2434; কর&#2494;র ম&#2494;ধ&#2509;যম&#2503; প&#2509;রত&#2495;ম&#2494;স&#2503; লক&#2509;ষ&#2494;ধ&#2495;ক ট&#2494;ক&#2494; আয় কর&#2503; থ&#2494;ক&#2503;, ন&#2495;জ&#2503; উদ&#2509;য&#2507;ক&#2509;ত&#2494; হয়&#2503; অন&#2509;যদ&#2503;র কর&#2509;মস&#2434;স&#2509;থ&#2494;ন&#2503;র ব&#2509;যবস&#2509;থ&#2494; কর&#2494;ট&#2494;ই ম&#2498;ল লক&#2509;ষ&#2509;য&#2404;</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
      </b:widget>
    </b:section>
  </div>
</div>
<div class='py-3 fs-7 text-center' id='socket'>
<b:section class='container px-3' id='copyright' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML23' locked='true' title='Copyright' type='HTML' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<p class="mb-0">কপিরাইট © ২০২৫। পুনঃডিজাইন করেছেন   <a href="https://www.therealanwarul.com.bd/">আনোয়ারুল ও জেটথিম.কম</a></p>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:include name='JetCopyRight'/>
    </b:includable>
  </b:widget>
</b:section>
</div>
</footer>

<div class='position-fixed d-none' id='back-to-top' style='right:20px;bottom:20px'><a aria-label='Back to Top' class='btn btn-sm jt-btn-light rounded-circle jt-icon-center' href='#back-to-top' onclick='window.scroll({top:0,left: 0,behavior:&apos;smooth&apos;});'><svg aria-hidden='true' class='jt-icon' height='1em' width='1em'><use xlink:href='#i-arrow-t'/></svg></a></div>

<b:section class='d-none' id='jet-options' maxwidgets='5' showaddelement='no'>
  <b:widget id='HTML24' locked='true' title='SVG Icons' type='HTML' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<symbol id="i-whatsapp" viewbox="0 0 512 512" stroke="none" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></symbol>
<symbol id="i-pinterest" viewbox="0 0 384 512" stroke="none" fill="currentColor"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></symbol>
<symbol id="i-tumblr" viewbox="0 0 320 512" stroke="none" fill="currentColor"><path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path></symbol>
<symbol id="i-twitter" fill="currentColor" stroke="none" viewbox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></symbol>
<symbol id="i-linkedin" fill="currentColor" stroke="none" viewbox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></symbol>
<symbol id="i-facebook" fill="currentColor" stroke="none" viewbox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></symbol>
<symbol id="i-arrow-b" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></symbol>
<symbol id="i-arrow-l" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></symbol>
<symbol id="i-arrow-r" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></symbol>
<symbol id="i-arrow-t" viewbox="0 0 24 24"><path d="M5 15l7-7 7 7"></path></symbol>
<symbol id="i-instagram" viewbox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></symbol>
<symbol id="i-youtube" viewbox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon fill="currentColor" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></symbol>
<symbol id="i-user" viewbox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></symbol>
<symbol id="i-clock" viewbox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></symbol>
<symbol id="i-comment" viewbox="0 0 24 24"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></symbol>
<symbol id="i-menu" viewbox="0 0 24 24" stroke-width="1.5"><path d="M3 6h18M8 12h13M3 18h18"></path></symbol>
<symbol id="i-mail" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></symbol>
<symbol id="i-edit" viewbox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></symbol>
<symbol id="i-close" viewbox="0 0 24 24" stroke-width="1"><path d="M6 18L18 6M6 6l12 12"></path></symbol>
<symbol id="i-search" viewbox="0 0 24 24" stroke-width="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></symbol>
<symbol id="i-check" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></symbol>
<symbol id="i-github" viewbox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></symbol>
<symbol id="i-telegram" stroke="none" fill="currentColor" viewbox="0 0 24 24"><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"></path></symbol>
<symbol id="i-download" viewbox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></symbol>
<symbol id="i-eye" viewbox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>
<symbol id="i-news" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></symbol>
<symbol id="i-phone" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></symbol>
<symbol id="i-sun" fill="#ffffff" stroke="#ffffff" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></symbol>
<symbol id="i-moon" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></symbol>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <svg style='display:none' xmlns='http://www.w3.org/2000/svg'><data:content/></svg>
    </b:includable>
  </b:widget>
</b:section>

<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='JetBodyClass'><b:eval expr='data:view.isHomepage ? &quot;is-home&quot; : data:view.isPost ? &quot;is-single&quot; : data:view.isPage ? &quot;is-page&quot; : data:view.isSearch ? &quot;is-search&quot; : &quot;is-archive&quot;'/></b:includable>
    <b:includable id='JetWidgetTitle'>
      <b:class name='position-relative mb-4'/>
      <b:if cond='data:title not contains &quot;#&quot;'>
        <h2 class='widget-title position-relative fs-6 mb-3'><span><data:title/></span></h2>
      </b:if>
    </b:includable>
    <b:includable id='JetHtml'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content text-break'><data:content/></div>
    </b:includable>
    <b:includable id='JetSocial'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content social-media mb-3'>
          <b:loop index='i' values='data:links' var='link'><a expr:aria-label='data:link.name' expr:class='&quot;mb-2 btn btn-sm jt-btn-light hover-btn-primary rounded-pill jt-icon-center i-&quot; + data:link.name' expr:href='data:link.target' rel='noopener' target='_blank'><b:class cond='data:i != data:links.size - 1' name='me-2'/><svg aria-hidden='true' class='jt-icon'><use expr:xlink:href='&quot;#i-&quot; + data:link.name'/></svg></a></b:loop>
      </div>
    </b:includable>
    <b:includable id='JetPopularPosts'>
<b:include name='JetWidgetTitle'/>
<b:with value='(data:widgets where (w =&gt; w.type == &quot;Blog&quot; and w.id == &quot;Blog1&quot; )).first' var='jwidget'>
<div class='widget-content popular-posts'>
<b:loop index='i' values='data:posts' var='post'>
<div class='item-post d-flex mb-3'>
<b:if cond='data:postDisplay.showFeaturedImage'>
<b:if cond='data:post.featuredImage'>
<div class='item-thumbnail me-3' style='width:85px'>
<a class='rounded jt-bg-light overflow-hidden d-block ratio ratio-1x1' expr:href='data:post.url.canonical'>
<img expr:alt='data:post.title' expr:class='data:post.featuredImage.isYoutube ?  &quot;object-cover lazyload&quot; : &quot;lazyload&quot;' expr:data-src='data:post.featuredImage.isYoutube ? data:post.featuredImage.youtubeMaxResDefaultUrl : data:post.featuredImage' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
</a>
</div>
</b:if>
<b:else/>
<div class='item-number me-3'><a class='btn btn-sm rounded-pill jt-icon-center jt-btn-primary' expr:href='data:post.url.canonical'><b:eval expr='data:i + 1'/></a></div>
</b:if>
<div class='item-content col overflow-hidden'>
<b:if cond='data:post.labels and data:jwidget.allBylineItems.labels'>
<div class='item-tag mb-1 fw-light fs-8 text-secondary text-nowrap text-truncate'>
<b:loop index='i' values='data:post.labels where (l =&gt; l.name not contains &quot;#&quot;) take data:skin.vars.maxLabel' var='label'>
<b:if cond='data:i != 0'>,</b:if>
<a class='text-reset hover-text-primary' expr:href='data:label.url.canonical + &quot;?max-results=10&quot;' rel='tag'>
<data:label.name/>
</a>
</b:loop>
</div>
</b:if>
<h3 class='item-title fs-7 mb-2'><a class='text-reset' expr:href='data:post.url.canonical'><data:post.title/></a></h3>
<div class='item-meta text-secondary d-flex flex-wrap fs-8'>
<b:if cond='data:jwidget.allBylineItems.timestamp'>
<small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-clock'/></svg><span class='date-format' expr:data-date='data:post.date.iso8601'><b:eval expr='data:jwidget.allBylineItems.timestamp.label ? data:post.date format data:jwidget.allBylineItems.timestamp.label : data:post.date'/></span></small>
</b:if>
<b:if cond='data:post.numberOfComments gt 0 and data:jwidget.allBylineItems.comments'>
<small><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-comment'/></svg><data:post.numberOfComments/></small>
</b:if>
</div>
<b:if cond='data:postDisplay.showSnippet'>
<div class='item-snippet text-break fs-8 pt-2'><p><b:eval expr='data:post.snippets.short snippet { links: false }'/></p></div>
</b:if>
</div>
</div>
</b:loop>
</div>
</b:with>
</b:includable>
    <b:includable id='JetLabel'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content categories'>
        <ul expr:class='data:display + &quot; d-flex flex-wrap list-unstyled&quot;'><b:loop index='i' values='data:labels' var='label'><b:if cond='data:display == &quot;list&quot; and data:label.name not contains &quot;#&quot;'><li class='mb-2 pe-2 col-6'><a class='text-reset fw-bold hover-text-primary' expr:href='data:label.url + &quot;?max-results=10&quot;'><span class='align-middle'><data:label.name/></span><b:if cond='data:showFreqNumbers'><span class='ms-1 fw-light fs-9'>[<data:label.count/>]</span></b:if></a></li><b:elseif cond='data:display == &quot;cloud&quot; and data:label.name contains &quot;#&quot;'/><li class='me-2 mb-2'><a class='btn btn-sm jt-btn-light rounded-pill px-3' expr:href='data:label.url + &quot;?max-results=10&quot;'><span class='align-middle'><data:label.name/></span><b:if cond='data:showFreqNumbers'><span class='ms-1 fw-light fs-9'>[<data:label.count/>]</span></b:if></a></li></b:if></b:loop></ul>
      </div>
    </b:includable>
    <b:includable id='JetPageList'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content'>
        <ul>
          <b:loop values='data:links' var='link'>
            <li>
              <a expr:href='data:link.href'>
              <b:class cond='data:link.isCurrentPage or data:view.url.canonical == data:link.href' name='current-item'/>
              <data:link.title/>
              </a>
            </li>
          </b:loop>
        </ul>
      </div>
    </b:includable>
    <b:includable id='JetLinkList'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content'>
        <ul class='list-unstyled'><b:loop values='data:links' var='link'><li class='mb-2'><a class='text-reset hover-text-primary' expr:href='data:link.target'><data:link.name/></a></li></b:loop></ul>
      </div>
    </b:includable>
    <b:includable id='JetTextList'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content'>
        <ul><b:loop values='data:items' var='item'><li><data:item/></li></b:loop></ul>
      </div>
    </b:includable>
    <b:includable id='JetFollowIt'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content follow-by-email'>
        <div class='mb-3'><data:content/></div>
        <form action='https://api.follow.it/subscribe?pub=CQoJCcEXztieMrPUAQYKlNRPCjlhk9FW' method='post' target='_blank'><div class='input-group rounded-pill overflow-hidden border border-2 jt-border-light' style='max-width:400px'><input aria-label='Email Address' class='form-control fs-7 bg-transparent border-0 text-reset py-2' id='newsletter-email' name='email' placeholder='Email Address' required='required' type='email'/><button aria-label='Submit Button' class='btn py-0 border-0 text-reset fs-5' type='submit'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-mail'/></svg></button></div></form>
      </div>
    </b:includable>
    <b:includable id='JetLogo'>
      <b:if cond='data:content contains &quot;&lt;/svg&gt;&quot;'>
	<b:class name='logo-wrap position-relative'/>
        <a class='navbar-brand fw-bold' expr:href='data:blog.canonicalHomepageUrl'>
          <data:content/>
        </a>
      <b:elseif cond='data:content contains &quot;data:image/&quot; OR  data:content contains &quot;https://&quot;'/>
        <b:class name='logo-wrap position-relative'/>
        <a class='d-block navbar-brand' expr:href='data:blog.canonicalHomepageUrl'>
          <img expr:alt='data:blog.title' expr:src='data:content' height='55' loading='lazy' width='175'/>
        </a>
      <b:else/>
        <a class='navbar-brand fw-bold' expr:href='data:blog.canonicalHomepageUrl'>
          <data:content/>
        </a>
      </b:if>
    </b:includable>
    <b:includable id='JetMenu'>      
    <b:class name='collapse navbar-collapse'/>
    <b:attr name='id' value='navbar'/>
<label class='d-flex position-absolute fs-1 d-lg-none mt-4 me-4 top-0 end-0' for='navbar-toggle'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-close'/></svg></label>
<ul class='navbar-nav px-4 p-lg-0 container' itemscope='itemscope' itemtype='http://schema.org/SiteNavigationElement' role='menu'>
  <b:loop index='i' values='data:links' var='link'>
    <b:switch var='data:link.target'>
      <b:case value='#sub-start'/><input class='d-none' expr:id='&quot;sub-toggle-&quot; + data:i' type='checkbox'/><label class='dropdown-toggle' expr:for='&quot;sub-toggle-&quot; + data:i'/> &lt;ul class=&quot;dropdown-menu rounded-0&quot;&gt; &lt;li class=&quot;d-none&quot;&gt; <b:case value='#sub-end'/>&lt;/li&gt; &lt;/ul&gt; <b:default/><b:if cond='data:i gt 0'>&lt;/li&gt;</b:if>&lt;li class=&quot;menu-item&quot;&gt;<a class='nav-link' expr:href='data:link.target' itemprop='url' role='menuitem'><b:class cond='data:view.url.canonical == data:link.target or data:view.url.canonical == path(data:blog.canonicalHomepageUrl, data:link.target)' name='active'/><span itemprop='name'><data:link.name/></span></a></b:switch></b:loop>&lt;/li&gt;</ul>
    </b:includable>
    <b:includable id='JetSearch'>
      <b:class name='d-flex align-self-stretch align-items-center order-lg-1 ms-auto'/>
      <b:if cond='data:title not contains &quot;#Icons&quot;'>
      <div class='header-social d-flex pe-1'><b:loop values='data:links' var='link'><a expr:aria-label='data:link.name' expr:class='&quot;px-2 text-reset jt-icon-center i-&quot; + data:link.name' expr:href='data:link.target' rel='noopener' target='_blank'><svg aria-hidden='true' class='jt-icon'><use expr:xlink:href='&quot;#i-&quot; + data:link.name'/></svg></a></b:loop></div>
      </b:if>
      <b:if cond='data:title not contains &quot;#Dark&quot;'>
      <div class='d-flex align-self-stretch align-items-center ps-1' id='dark-header'>
        <label aria-label='Toggle Dark Mode' class='p-2 jt-icon-center' id='dark-toggler'><svg aria-hidden='true' class='jt-icon'><use class='icon-light' xlink:href='#i-moon'/><use class='icon-dark' xlink:href='#i-sun'/></svg></label>
      </div>
      </b:if>
      <b:if cond='data:title not contains &quot;#Search&quot;'>
      <div class='d-flex align-self-stretch align-items-center position-md-relative' id='search-header'>
        <input class='d-none' id='search-toggle' type='checkbox'/>
        <label aria-label='Toggle search' class='p-2 check-text-primary hover-text-primary jt-icon-center' for='search-toggle' id='search-toggler'><svg aria-hidden='true' class='fs-5 jt-icon'><use xlink:href='#i-search'/></svg></label>
        <div class='dropdown-menu p-1 shadow-sm d-block-check'>
          <form class='input-group' expr:action='data:blog.searchUrl' method='GET' target='_top'> 
            <input class='form-control fs-7 border-0 rounded-0 bg-transparent text-reset' expr:value='data:view.isSearch ? data:view.search.query : &quot;&quot;' id='search-input' name='q' placeholder='সার্চ করুন এই ব্লগে' required='required' type='text'/>
            <input name='max-results' type='hidden' value='10'/>
            <button class='btn btn-sm fw-bold py-2 px-4 rounded-pill border-0 jt-btn-primary m-0' type='submit'>স&#2494;র&#2509;চ</button>
          </form>
        </div>
      </div>
      </b:if>
      <div class='d-flex align-self-stretch align-items-center d-lg-none'>
        <label aria-label='Toggle navigation' class='p-1 jt-icon-center hover-text-primary' for='navbar-toggle' id='navbar-toggler'><svg aria-hidden='true' class='fs-3 jt-icon'><use xlink:href='#i-menu'/></svg></label>
      </div>
    </b:includable>
    <b:includable id='JetCopyRight'>
        <p class='mb-0'><data:content/></p>
    </b:includable>
    <b:includable id='JetProfile'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content'>
        <img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:src='data:authorPhoto.image' expr:width='data:authorPhoto.width'/>
        <data:displayname/>
<data:aboutme/>
      </div>
    </b:includable>
    <b:includable id='JetArchive' var='post'>
<div class='h-100 overflow-hidden rounded position-relative border jt-border-light bg-archive shadow-sm'>
<b:include data='post' name='JetPostMeta'/>
<b:if cond='data:post.featuredImage'>
<div class='item-thumbnail'>
<a class='jt-bg-light d-block ratio ratio-16x9' expr:href='data:post.url.canonical' rel='bookmark'>  
<img expr:alt='data:post.title' expr:class='data:post.featuredImage.isYoutube ?  &quot;object-cover lazyload&quot; : &quot;lazyload&quot;' expr:data-src='data:post.featuredImage.isYoutube ? data:post.thumbnailUrl : data:post.featuredImage' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
</a>
</div>
</b:if>
<div class='item-content p-4'>






<b:tag class='item-title fs-5 mb-3' expr:name='data:view.isHomepage ? &quot;h3&quot; : &quot;h2&quot;'>
<a class='text-reset' expr:href='data:post.url.canonical'><data:post.title/></a>
</b:tag>





<span expr:class='&quot;position-absolute top-0 end-0 &quot; + data:post.adminClass'>
<a class='btn btn-sm jt-btn-light rounded-pill jt-icon-center' expr:href='&quot;https://www.blogger.com/blog/post/edit/&quot; + data:blog.blogId + &quot;/&quot; + data:post.id' rel='nofollow noopener noreferrer' target='_blank' title='Edit post'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-edit'/></svg></a>
</span>
</div>
</div>
    </b:includable>
    <b:includable id='JetPagination'>
<b:if cond='data:newerPageUrl || data:olderPageUrl'>
<b:if cond='data:view.isPost'>
<div class='d-sm-flex border-top border-bottom jt-border-light mb-5' id='post-pager'>
<b:if cond='data:newerPageUrl'>
<a class='d-block prev-page col-sm-6 py-3 pe-sm-3 border-sm-bottom jt-border-light text-reset text-center text-sm-start' expr:href='data:newerPageUrl.canonical'>
<span class='d-block pe-2 fs-7 fw-light'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-arrow-l'/></svg> প&#2498;র&#2509;ব&#2503;র প&#2507;স&#2509;ট দ&#2503;খ&#2497;ন </span>
</a>
</b:if>
<b:if cond='data:olderPageUrl'>
<a class='d-block next-page col-sm-6 py-3 ps-sm-3 jt-border-light text-center text-sm-end text-reset ms-auto' expr:href='data:olderPageUrl.canonical'>
<span class='d-block ps-2 fs-7 fw-light'> পরবর&#2509;ত&#2496; প&#2507;স&#2509;ট দ&#2503;খ&#2497;ন <svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-arrow-r'/></svg></span>
</a>
</b:if>
</div>
<b:else/>
<div class='d-flex justify-content-evenly visually-hidden' expr:data-label='data:view.search.label' expr:data-pagination='!data:view.isArchive and !data:view.isPost and !data:view.search.query' expr:data-posts='data:posts.size' id='pagination'>
<b:if cond='data:newerPageUrl'>
<div class='prev-page me-3'>
<a class='btn btn-sm jt-btn-primary border-2 py-2 px-4 fw-bold' expr:href='data:newerPageUrl'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-arrow-l'/></svg>Prev</a>
</div>
</b:if>
<b:if cond='data:olderPageUrl'>
<div class='next-page'>
<a class='btn btn-sm jt-btn-primary border-2 py-2 px-4 fw-bold' expr:href='data:olderPageUrl'>Next<svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-arrow-r'/></svg></a>
</div>
</b:if>
</div>
</b:if>
</b:if>
    </b:includable>
    <b:includable id='JetFeaturedPost'>
<b:include name='JetWidgetTitle'/>
<b:with value='(data:widgets where (w =&gt; w.type == &quot;Blog&quot; and w.id == &quot;Blog1&quot; )).first' var='jwidget'>
<div class='widget-content feature-posts'>
<b:loop values='data:posts' var='post'>
<div class='item-post d-sm-flex'>
<b:if cond='data:post.featuredImage and data:postDisplay.showFeaturedImage'>
<div class='item-thumbnail full-width pe-sm-3 col-sm-6'>
<a class='d-block jt-bg-light overflow-hidden rounded shadow-sm ratio ratio-1x1' expr:href='data:post.url.canonical' rel='bookmark'>
<img expr:alt='data:post.title' expr:class='data:post.featuredImage.isYoutube ?  &quot;object-cover lazyload&quot; : &quot;lazyload&quot;' expr:data-src='data:post.featuredImage.isYoutube ? data:post.featuredImage.youtubeMaxResDefaultUrl : data:post.featuredImage' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
</a>
</div>
</b:if>
<div class='item-content p-4 py-sm-0 position-relative jt-border-light'>
<b:class cond='data:post.featuredImage' name='col-sm-6'/>
<b:if cond='data:post.labels and data:jwidget.allBylineItems.labels'>
<div class='item-tag mb-3 fw-light text-secondary text-nowrap overflow-hidden text-truncate'>
<b:loop index='i' values='data:post.labels where (l =&gt; l.name not contains &quot;#&quot;) take data:skin.vars.maxLabel' var='label'>
<b:if cond='data:i != 0'>,</b:if>
<a class='text-reset hover-text-primary' expr:href='data:label.url.canonical + &quot;?max-results=10&quot;' rel='tag'>
<data:label.name/>
</a>
</b:loop>
</div>
</b:if>
<b:if cond='data:postDisplay.showTitle'>
<h3 class='item-title mb-4 fs-2'><a class='text-reset' expr:href='data:post.url.canonical'><data:post.title/></a></h3>
</b:if>
<b:if cond='data:postDisplay.showSnippet'>
<p class='item-snippet text-break mb-3'><b:eval expr='data:post.snippets.short snippet { links: false }'/></p>
</b:if>




<span class='position-absolute top-0 end-0 blog-admin'>
<a class='btn btn-sm jt-btn-light rounded-pill jt-icon-center' expr:href='&quot;https://www.blogger.com/blog/post/edit/&quot; + data:blog.blogId + &quot;/&quot; + data:post.id' rel='nofollow noopener noreferrer' target='_blank' title='Edit post'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-edit'/></svg></a>
</span>
</div>
</div>
</b:loop>
</div>
</b:with>
</b:includable>
	<b:includable id='Jet404'>
<b:if cond='data:view.isMultipleItems'>
<article id='page-content'>
<header class='entry-header'>
<h1 class='entry-title mb-4'>Nothing Here</h1>
</header>
<div class='entry-text text-break mb-5'>
<b:if cond='data:view.isHomepage'>
<p>Ready to publish your first post? <a expr:href='&quot;https://www.blogger.com/blog/posts/&quot; + data:blog.blogId'>Get started here.</a></p>
<b:else/>
<p>The keyword you were looking for was not found</p>
</b:if>
</div>
</article>
<b:else/>
<article id='page-content'>
<header class='entry-header'>
<h1 class='entry-title mb-4'>404 Not Found</h1>
</header>
<div class='entry-text text-break mb-5'>
<data:navMessage/>
</div>
</article>
</b:if>
</b:includable>
	<b:includable id='JetBreadcrumbs' var='post'>
<b:if cond='data:view.isMultipleItems and !data:view.search.query and !data:view.search.label and !data:view.isArchive'>
<b:tag class='widget-title position-relative fs-6 mb-3' expr:name='data:view.isHomepage ? &quot;h2&quot; : &quot;div&quot;'><p class='alert sdw-oit' style='text-align:center; border-bottom: 1px solid var(--jt-header-bg)'>
<b>আম&#2494;দ&#2503;র প&#2509;রক&#2494;শ&#2495;ত ল&#2503;ট&#2503;স&#2509;ট ব&#2509;লগ প&#2507;স&#2509;টসম&#2498;হ&#2435;</b>
</p></b:tag>
<b:else/>
<div itemscope='itemscope' itemtype='https://schema.org/BreadcrumbList' style='--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns=&apos;http://www.w3.org/2000/svg&apos; height=&apos;8&apos; width=&apos;8&apos; fill=&apos;none&apos; viewbox=&apos;0 0 24 24&apos; stroke=&apos;%23686868&apos;%3E%3Cpath stroke-linecap=&apos;round&apos; stroke-linejoin=&apos;round&apos; stroke-width=&apos;1&apos; d=&apos;M 0.5,0.5 4,4 0.5,7.5&apos;/%3E%3C/svg%3E&quot;);'>
<ol class='breadcrumb d-block text-nowrap fs-7 overflow-hidden text-truncate'>
<b:if cond='data:view.search.query'>
  <li class='breadcrumb-item d-inline-block'>Search for: <data:view.search.query/></li>
<b:else/>
  <li class='breadcrumb-item d-inline-block' itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
    <a expr:href='data:blog.canonicalHomepageUrl' itemprop='item' rel='tag' title='Home'><span itemprop='name'>হ&#2507;মপ&#2503;জ</span></a>
    <meta content='1' itemprop='position'/>
  </li>
  <b:if cond='data:post.labels'>     
    <b:loop index='i' values='data:post.labels where (l =&gt; l.name not contains &quot;#&quot;) take data:skin.vars.maxLabel' var='label'>
      <li class='breadcrumb-item d-inline-block' itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
        <a expr:href='data:label.url.canonical + &quot;?max-results=10&quot;' expr:title='data:label.name' itemprop='item' rel='tag'><span itemprop='name'><data:label.name/></span></a>
        <meta expr:content='data:i + 2' itemprop='position'/>
      </li>
    </b:loop>
  </b:if>
  <b:if cond='data:view.search.label'>
    <li aria-current='page' class='breadcrumb-item d-inline-block active'><b:eval expr='data:view.search.label'/></li>
  </b:if>
  <b:if cond='data:view.isArchive'>
    <li aria-current='page' class='breadcrumb-item d-inline-block active'>
    <b:loop index='i' values='[data:view.archive.year,data:view.archive.month,data:view.archive.day]' var='dates'>
      <b:if cond='data:i == 0'>
        <a expr:href='data:blog.canonicalHomepageUrl + data:dates'><data:dates/></a>
      </b:if>
      <b:if cond='data:i == 1'>
        / <a expr:href='data:blog.canonicalHomepageUrl + data:view.archive.year +(data:dates gte 10 ? &quot;/&quot; : &quot;/0&quot; )+ data:dates'>
        <b:eval expr='data:dates gte 10 ? data:dates : &quot;0&quot; + data:dates '/>
        </a>
      </b:if>
      <b:if cond='data:i == 2'>
        / <data:dates/>
      </b:if>
    </b:loop>
  </li>
  </b:if>
</b:if>
</ol>
</div>
</b:if>
    </b:includable>
    <b:includable id='JetComments' var='post'>
<b:if cond='data:post.embedCommentForm'>
<div class='comments threaded mb-5' id='comments'>
<div class='widget-title position-relative mb-3 text-uppercase fw-light'>
<span><b:eval expr='data:post.numberOfComments gt 0 ? data:post.numberOfComments + &quot; জন কমেন্ট করেছেন ইতোমধ্যে&quot; : &quot;এই পোস্টে এখনো কেউ মন্তব্য করে নি&quot;'/></span>
</div>
<div class='comments-content'>
<ul class='list-unstyled'>
<b:loop values='data:post.comments where (c =&gt; not c.inReplyTo or c.inReplyTo == 0)' var='commentLevel1'>
<li class='comment mb-4' expr:id='data:commentLevel1.anchorName'>
<div class='comment-block'>
<div class='comment-header position-relative d-flex mb-2'>
<div class='avatar-image me-3 mt-1' style='width:35px'>
<div class='rounded-pill jt-bg-light overflow-hidden d-block ratio ratio-1x1'>
<img class='lazyload' expr:alt='data:commentLevel1.author' expr:data-src='data:commentLevel1.authorAvatarSrc' expr:title='data:commentLevel1.author' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
</div>
</div>
<div class='avatar-name col'>
<span class='d-block fs-7 fw-bold'>
<data:commentLevel1.author/>
<b:if cond='data:commentLevel1.authorUrl == data:post.author.profileUrl'>
<svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-check'/></svg>
</b:if>
</span>
<span class='d-inline-block fw-light text-secondary fs-8'><data:commentLevel1.timestamp/></span>
</div>
<span expr:class='&quot;delete-comment &quot; + data:commentLevel1.adminClass'>
<a aria-label='Delete' class='btn btn-sm jt-btn-light rounded-pill jt-icon-center' expr:href='data:commentLevel1.deleteUrl' rel='nofollow noopener noreferrer' target='_blank'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-close'/></svg></a>
</span>
</div>
<div class='comment-content text-break fs-7 jt-bg-light p-3 rounded mb-3'><p class='mb-0'><b:eval expr='data:commentLevel1.body snippet { links: false }'/></p></div>
</div>
<b:with value='data:post.comments where (c =&gt; c.inReplyTo == data:commentLevel1.id)' var='commentL2'>
<b:if cond='data:commentL2.size gt 0'>
<div class='comment-replies mt-4'>
<ul class='list-unstyled jt-border-light border-start border-5 ps-3'>
<b:loop values='data:commentL2' var='commentLevel2'>
<li class='comment mb-3' expr:id='data:commentLevel2.anchorName'>
<div class='comment-block'>
<div class='comment-header position-relative d-flex mb-2'>
<div class='avatar-image me-3 mt-1' style='width:35px'>
<div class='rounded-pill jt-bg-light overflow-hidden d-block ratio ratio-1x1'>
<img class='lazyload' expr:alt='data:commentLevel2.author' expr:data-src='data:commentLevel2.authorAvatarSrc' expr:title='data:commentLevel2.author' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
</div>
</div>
<div class='avatar-name col'>
<span class='d-block fs-7 fw-bold'>
<data:commentLevel2.author/>
<b:if cond='data:commentLevel2.authorUrl == data:post.author.profileUrl'>
<svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-check'/></svg>
</b:if>
</span>
<span class='d-inline-block fw-light text-secondary fs-8'><data:commentLevel2.timestamp/></span>
</div>
<span expr:class='&quot;delete-comment &quot; + data:commentLevel2.adminClass'>
<a aria-label='Delete' class='btn btn-sm jt-btn-light rounded-pill jt-icon-center' expr:href='data:commentLevel2.deleteUrl' rel='nofollow noopener noreferrer' target='_blank'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-close'/></svg></a>
</span>
</div>
<div class='comment-content text-break fs-7 jt-bg-light p-3 rounded mb-3'><p class='mb-0'><b:eval expr='data:commentLevel2.body snippet { links: false }'/></p></div>
</div>
</li>
</b:loop>
</ul>
</div>
</b:if>
</b:with>
<div class='comment-actions'>
<a class='comment-reply btn btn-sm jt-btn-light rounded-pill px-4' expr:data-comment-id='data:commentLevel1.id' expr:href='data:post.commentFormIframeSrc appendParams {skin: &quot;contempo&quot;,parentID: data:commentLevel1.id}' rel='nofollow noopener noreferrer' target='_blank'>Reply</a>
</div>
</li>
</b:loop>
</ul>
</div>
<b:if cond='data:post.allowNewComments'>
<div id='add-comment'>
<a class='btn btn-sm jt-btn-primary border-2 fw-bold py-2 px-5' expr:href='data:post.commentFormIframeSrc appendParams {skin: &quot;contempo&quot;}' id='comment-button' rel='nofollow noopener noreferrer' target='_blank'><svg aria-hidden='true' class='me-1 fs-6 jt-icon'><use xlink:href='#i-comment'/></svg>মন&#2509;তব&#2509;য করত&#2503; এখ&#2494;ন&#2503; ক&#2509;ল&#2495;ক কর&#2497;ন</a>
<div class='mt-3 px-2 pt-2 jt-bg-light rounded d-none' id='threaded-comment-form'>
<a class='d-none' href='#' id='comment-editor-src'>comment url</a>
<iframe class='blogger-iframe-colorize blogger-comment-from-post' data-resized='true' height='90' id='comment-editor' name='comment-editor'/>
<textarea disabled='disabled' id='comment-script' readonly='readonly' style='display:none'><data:post.cmtfpIframe/></textarea>
</div>
</div>
</b:if>
</div>
</b:if>
</b:includable>
    <b:includable id='JetShare' var='post'>
      <b:if cond='data:jwidget.allBylineItems.share'>
        
        <h6 style='background-color: var(--jt-archive-bg); border-radius: 1px !important; padding: 5px; border-bottom: 2px solid var(--bs-body-color);'>এই প&#2507;স&#2509;টট&#2495; পর&#2495;চ&#2495;তদ&#2503;র স&#2494;থ&#2503; শ&#2503;য়&#2494;র কর&#2497;ন</h6>
        
      <div class='social-share mb-3'>
        <div class='d-flex fs-5'>
          <a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#3b5998' target='_blank' title='Facebook Share'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-facebook'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#55acee' target='_blank' title='Tweet This'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-twitter'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage' rel='nofollow noopener noreferrer' style='background-color:#cb2027' target='_blank' title='Pin It'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-pinterest'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://www.linkedin.com/sharing/share-offsite/?url=&quot; + data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#2554bf' target='_blank' title='Linkedin Share'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-linkedin'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://www.tumblr.com/share/link?url=&quot; + data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#314358' target='_blank' title='Tumblr Share'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-tumblr'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://wa.me/?text=&quot;+ data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#25d366' target='_blank' title='Share to whatsapp'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-whatsapp'/></svg></a>
<a class='me-2 mb-2 btn btn-sm jt-icon-center text-white rounded-pill' expr:href='&quot;https://t.me/share/url?url=&quot; + data:post.url.canonical' rel='nofollow noopener noreferrer' style='background-color:#0088cc' target='_blank' title='Share to telegram'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-telegram'/></svg></a>
        </div>
      </div>
      </b:if>
    </b:includable>
    <b:includable id='JetPostMeta' var='post'>
<script type='application/ld+json'>
{
  &quot;@context&quot;: &quot;http://schema.org/&quot;,
  &quot;@type&quot;: &quot;NewsArticle&quot;,
  &quot;mainEntityOfPage&quot;: {
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;@id&quot;: &quot;<data:post.url.canonical/>&quot;
  },
  &quot;author&quot;: {
    &quot;@type&quot;: &quot;Person&quot;,
    &quot;name&quot;: &quot;<data:post.author.name/>&quot;,
    &quot;url&quot;: &quot;<data:post.author.profileUrl/>&quot;
  },
  &quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;<data:blog.title.jsonEscaped/>&quot;<b:if cond='data:skin.vars.logo'>,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;<data:skin.vars.logo/>&quot;
    }</b:if>
  },
  &quot;headline&quot;: &quot;<data:post.title.jsonEscaped/>&quot;,
  &quot;description&quot;: &quot;<b:eval expr='data:view.isMultipleItems ? data:post.snippets.long.jsonEscaped : data:view.description.jsonEscaped'/>&quot;,
  &quot;image&quot;: &quot;<data:post.featuredImage/>&quot;,
  &quot;datePublished&quot;: &quot;<data:post.date.iso8601/>&quot;,
  &quot;dateModified&quot;: &quot;<data:post.lastUpdated.iso8601/>&quot;
}
</script>   
    </b:includable>
    <b:includable id='JetPost' var='post'>
<article class='mb-5' id='single-content'>
<b:include data='post' name='JetPostMeta'/>
<header class='entry-header mb-3'>
<h1 class='entry-title mb-4'><data:post.title/></h1>


</header>

<div class='entry-text text-break mb-5' id='post-body'>
<data:post.body/>
</div>


  
  <b:include data='post' name='JetShare'/>
  
</article>
      
      
      
<div expr:class='&quot;position-fixed start-0 top-50 &quot; + data:post.adminClass'>
<a class='d-block btn btn-sm jt-btn-light rounded-0' expr:href='&quot;https://www.blogger.com/blog/posts/&quot; + data:blog.blogId' rel='nofollow noopener noreferrer' target='_blank' title='Dashboard'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-menu'/></svg></a><a class='d-block btn btn-sm jt-btn-light rounded-0' expr:href='&quot;https://www.blogger.com/blog/post/edit/&quot; + data:blog.blogId + &quot;/&quot; + data:post.id' rel='nofollow noopener noreferrer' target='_blank' title='Edit post'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-edit'/></svg></a>
</div>
    </b:includable>
    <b:includable id='JetPage' var='post'>
<article class='mb-5' id='page-content'>
<header class='entry-header'>
<h1 class='entry-title mb-4'><data:post.title/></h1>
</header>
<div class='entry-text text-break mb-5'>
<data:post.body/>
</div>
</article>
<div expr:class='&quot;position-fixed start-0 top-50 &quot; + data:post.adminClass'>
<a class='d-block btn btn-sm jt-btn-light rounded-0' expr:href='&quot;https://www.blogger.com/blog/pages/&quot; + data:blog.blogId' rel='nofollow noopener noreferrer' target='_blank' title='Dashboard'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-menu'/></svg></a><a class='d-block btn btn-sm jt-btn-light rounded-0' expr:href='&quot;https://www.blogger.com/blog/page/edit/&quot; + data:blog.blogId + &quot;/&quot; + data:post.id' rel='nofollow noopener noreferrer' target='_blank' title='Edit post'><svg aria-hidden='true' class='jt-icon'><use xlink:href='#i-edit'/></svg></a>
</div>
    </b:includable>
	<b:includable id='JetRelatedPost' var='post'>
<b:if cond='data:post.labels'>
<div class='custom-posts visually-hidden related-posts' data-func='related_temp' data-items='10' data-shuffle='4' data-title='আপনার পছন্দ হতে পারে এমন আরো পোস্ট' expr:data-no-item='data:post.url.canonical'><b:with value='data:post.labels where (l =&gt; l.name not contains &quot;#&quot;)' var='labels'><b:loop index='i' values='data:labels' var='label'><data:label.name/><b:if cond='data:i != data:labels.size - 1 '>,</b:if></b:loop></b:with></div>
</b:if>
</b:includable>
    <b:includable id='JetBlog'>
	<b:with value='(data:widgets where (w =&gt; w.type == data:widget.type and w.id == data:widget.instanceId )).first' var='jwidget'>
      <b:if cond='data:view.isError OR data:numPosts == 0'>
        <b:include name='JetBreadcrumbs'/>
        <b:include name='Jet404'/>
        <b:elseif cond='data:view.isMultipleItems'/>
        <b:include name='JetBreadcrumbs'/>
        <div class='widget-content'>
          <div class='row row-cols-sm-2' id='blog-content'>
            <b:loop values='data:posts' var='post'>
              <article class='item-post mb-4'>
                <b:include data='post' name='JetArchive'/>
              </article>
            </b:loop>
          </div>
          <b:include name='JetPagination'/>
        </div>
        <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:if cond='data:view.isPost'>
            <b:include data='post' name='JetBreadcrumbs'/>
            <b:include data='post' name='JetPost'/>
            <b:include name='JetPagination'/>
            <b:include data='post' name='JetComments'/>
            <b:include data='post' name='JetRelatedPost'/>            
            <b:elseif cond='data:view.isPage'/>
            <b:include data='post' name='JetPage'/>
            <b:include data='post' name='JetComments'/>
          </b:if>          
        </b:loop>
     </b:if>
    </b:with>
    </b:includable>
    <b:includable id='JetContactForm'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content contact-form'>
      <form class='contact-form-blogger'>
        <div class='contact-form-wrap row'>
          <div class='col-12 mb-3'>
            <label class='form-label fs-7 fw-bold' expr:for='&quot;field-name_&quot; + data:widget.instanceId'>Your Name</label>
            <input class='form-control bg-transparent jt-border-light text-reset' expr:id='&quot;field-name_&quot; + data:widget.instanceId' name='name' placeholder='Enter Name' required='' type='text'/>
          </div>
          <div class='col-12 mb-3'>
            <label class='form-label fs-7 fw-bold' expr:for='&quot;field-email_&quot; + data:widget.instanceId'>Email Address</label>
            <input class='form-control bg-transparent jt-border-light text-reset' expr:id='&quot;field-email_&quot; + data:widget.instanceId' name='email' placeholder='Enter Email' required='' type='email'/>
          </div>
          <div class='col-12 mb-3'>
            <label class='form-label fs-7 fw-bold' expr:for='&quot;field-message_&quot; + data:widget.instanceId'>Message</label>
            <textarea class='form-control bg-transparent jt-border-light text-reset' expr:id='&quot;field-message_&quot; + data:widget.instanceId' name='message' placeholder='Enter Message' required='' rows='3'/>
          </div>
          <div class='col-12 mb-3'>
            <button class='btn btn-sm fw-bold py-2 px-5 jt-btn-primary' type='submit'>SEND</button>
          </div>
        </div>
        <div class='contact-form-msg d-none border border-3 rounded text-center p-3 fs-7' data-error='Message failed to send. Please try again an hour later.' data-success='Thank you message sent successfully.'>
        </div>
      </form>
    </div>
  	</b:includable>
  	<b:includable id='JetImage'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content'>
        <div class='overflow-hidden position-relative jt-bg-white'>
          <b:class cond='data:title contains &quot;#&quot;' name='border-end border-bottom jt-border-light'/>
          <div class='bg-dark ratio ratio-4x3'>
            <img class='lazyload' expr:alt='data:caption' expr:data-src='data:sourceUrl' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/>
            <b:tag class='image-content position-absolute d-flex justify-content-center align-items-center' cond='data:caption or data:link' expr:name='data:caption ? &quot;div&quot; : &quot;a&quot;'>
              <b:attr cond='!data:caption' name='href' value='data:link'/> 
              <b:attr cond='data:caption' name='style' value='background:linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, rgba(77, 77, 77, 0) 100%)'/>
              <b:tag class='py-2 px-4 jt-bg-white' cond='data:caption' expr:href='data:link' expr:name='data:link ? &quot;a&quot; : &quot;span&quot;'><b:class cond='data:caption and data:link' name='btn btn-sm jt-btn-light hover-btn-primary rounded-0'/><data:caption/></b:tag>
            </b:tag>
          </div>
        </div>
      </div>
    </b:includable>
    <b:includable id='JetBlogArchive' var='this'>
      <b:include name='JetWidgetTitle'/>
      <div class='widget-content blog-archive'>
        <b:if cond='data:this.style == &quot;HIERARCHY&quot;'>
          <b:include data='data' name='JetBlogArchiveHierarchy'/>
          <b:else/>
          <ul class='flat d-flex flex-wrap list-unstyled mb-0'>
            <b:loop values='data:data' var='i'>
              <li class='mb-2 pe-2 col-6'>
                <a class='text-reset fw-bold hover-text-primary' expr:href='data:i.url'>
                  <span class='align-middle'><data:i.name/></span>
                  <span class='ms-1 fw-light fs-9'>[<data:i.post-count/>]</span>
                </a>
              </li>
            </b:loop>
          </ul>
        </b:if>
      </div>
    </b:includable>
    <b:includable id='JetBlogArchiveHierarchy' var='intervals'>
      <ul class='hierarchy list-unstyled border-start border-2 jt-border-light ps-2 mb-0'>
        <b:loop values='data:intervals' var='interval'>
          <li class='mb-2 pe-2'>
            <div class='hierarchy-date mb-2'>
              <a class='text-reset fw-bold hover-text-primary' expr:href='data:interval.url'>
                <span class='align-middle'><data:interval.name/></span>
                <span class='ms-1 fw-light fs-9'>[<data:interval.post-count/>]</span>
              </a>
            </div>
            <div class='hierarchy-content'>
                <b:include cond='data:interval.data' data='interval.data' name='JetBlogArchiveHierarchy'/>
                <b:if cond='data:interval.posts'>
                  <ul class='hierarchy-posts list-unstyled border-start border-2 jt-border-light ps-2 mb-0'>
                    <b:loop values='data:interval.posts' var='post'>
                      <li><a class='text-reset fs-7 hover-text-primary' expr:href='data:post.url'><data:post.title/></a></li>
                    </b:loop>
                  </ul>
                </b:if>
            </div>
          </li>
        </b:loop>
      </ul>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
  
<b:defaultmarkups>
  <b:defaultmarkup type='HTML,Text'>
    <b:includable id='main'>
      <b:include name='JetHtml'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='PopularPosts'>
    <b:includable id='main'>
      <b:include name='JetPopularPosts'/>
    </b:includable>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='linkShare'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postJumpLink'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='snippetedPostByline'/>
    <b:includable id='snippetedPostContent'/>
    <b:includable id='snippetedPostThumbnail'/>
    <b:includable id='snippetedPostTitle'/>
    <b:includable id='snippetedPosts'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='Label'>
    <b:includable id='main'>
      <b:include name='JetLabel'/>
    </b:includable>
    <b:includable id='content'/>
    <b:includable id='cloud'/>
    <b:includable id='list'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='LinkList'>
    <b:includable id='main'>
      <b:include name='JetLinkList'/>
    </b:includable>
    <b:includable id='content'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='TextList'>
    <b:includable id='main'>
      <b:include name='JetTextList'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Profile'>
    <b:includable id='main'>
      <b:include name='JetProfile'/>
    </b:includable>
    <b:includable id='authorProfileImage'/>
    <b:includable id='content'/>
    <b:includable id='defaultProfileImage'/>
    <b:includable id='profileImage'/>
    <b:includable id='teamProfile'/>
    <b:includable id='teamProfileLink'/>
    <b:includable id='userGoogleProfile'/>
    <b:includable id='userLocation'/>
    <b:includable id='userProfile'/>
    <b:includable id='userProfileData'/>
    <b:includable id='userProfileImage'/>
    <b:includable id='userProfileInfo'/>
    <b:includable id='userProfileLink'/>
    <b:includable id='userProfileText'/>
    <b:includable id='viewProfileLink'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='PageList'>
    <b:includable id='main'>
      <b:include name='JetPageList'/>
    </b:includable>
    <b:includable id='content'/>
    <b:includable id='overflowButton'/>
    <b:includable id='overflowablePageList'/>
    <b:includable id='pageLink'/>
    <b:includable id='pageList'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='FeaturedPost'>
    <b:includable id='main' var='this'>
      <b:include name='JetFeaturedPost'/>
    </b:includable>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='linkShare'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postJumpLink'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='snippetedPostByline'/>
    <b:includable id='snippetedPostContent'/>
    <b:includable id='snippetedPostThumbnail'/>
    <b:includable id='snippetedPostTitle'/>
    <b:includable id='snippetedPosts'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='Blog'>
    <b:includable id='main' var='top'>
      <b:include name='JetBlog'/>
    </b:includable>
    <b:includable id='aboutPostAuthor'/>
    <b:includable id='addComments'/>
    <b:includable id='blogThisShare'/>
    <b:includable id='bylineByName'/>
    <b:includable id='bylineRegion'/>
    <b:includable id='commentAuthorAvatar'/>
    <b:includable id='commentDeleteIcon'/>
    <b:includable id='commentForm'/>
    <b:includable id='commentFormIframeSrc'/>
    <b:includable id='commentItem'/>
    <b:includable id='commentList'/>
    <b:includable id='commentPicker'/>
    <b:includable id='comments'/>
    <b:includable id='commentsLink'/>
    <b:includable id='commentsLinkIframe'/>
    <b:includable id='commentsTitle'/>
    <b:includable id='defaultAdUnit'/>
    <b:includable id='emailPostIcon'/>
    <b:includable id='facebookShare'/>
    <b:includable id='feedLinks'/>
    <b:includable id='feedLinksBody'/>
    <b:includable id='footerBylines'/>
    <b:includable id='googlePlusShare'/>
    <b:includable id='headerByline'/>
    <b:includable id='homePageLink'/>
    <b:includable id='iframeComments'/>
    <b:includable id='inlineAd'/>
    <b:includable id='linkShare'/>
    <b:includable id='manageComments'/>
    <b:includable id='nextPageLink'/>
    <b:includable id='otherSharingButton'/>
    <b:includable id='platformShare'/>
    <b:includable id='post'/>
    <b:includable id='postAuthor'/>
    <b:includable id='postBody'/>
    <b:includable id='postBodySnippet'/>
    <b:includable id='postCommentsAndAd'/>
    <b:includable id='postCommentsLink'/>
    <b:includable id='postFooter'/>
    <b:includable id='postFooterAuthorProfile'/>
    <b:includable id='postHeader'/>
    <b:includable id='postJumpLink' var='post'/>
    <b:includable id='postLabels'/>
    <b:includable id='postLocation'/>
    <b:includable id='postMeta'/>
    <b:includable id='postMetadataJSONImage'/>
    <b:includable id='postMetadataJSONPublisher'/>
    <b:includable id='postPagination'/>
    <b:includable id='postReactions'/>
    <b:includable id='postShareButtons'/>
    <b:includable id='postTimestamp'/>
    <b:includable id='postTitle'/>
    <b:includable id='previousPageLink'/>
    <b:includable id='sharingButton'/>
    <b:includable id='sharingButtonContent'/>
    <b:includable id='sharingButtons'/>
    <b:includable id='sharingButtonsMenu'/>
    <b:includable id='sharingPlatformIcon'/>
    <b:includable id='threadedCommentForm'/>
    <b:includable id='threadedCommentJs'/>
    <b:includable id='threadedComments'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='ContactForm'>
    <b:includable id='main'>
      <b:include name='JetContactForm'/>
    </b:includable>    
    <b:includable id='content'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='Image'>
    <b:includable id='main'>
      <b:include name='JetImage'/>
    </b:includable>
    <b:includable id='content'/>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogArchive'>
    <b:includable id='main' var='this'>
      <b:include name='JetBlogArchive'/>
    </b:includable>
    <b:includable id='content'/>
    <b:includable id='flat'/>
    <b:includable id='hierarchy'/>
    <b:includable id='interval'/>
    <b:includable id='posts'/>
  </b:defaultmarkup>
</b:defaultmarkups>
<script>
const siteUrl=&quot;<data:blog.canonicalHomepageUrl/>&quot;;
const blogId=&quot;<data:blog.blogId/>&quot;;
const blogTitle=&quot;<data:blog.title.jsEscaped/>&quot;;
const titleSeparator=&quot;<b:eval expr='data:skin.vars.separator'/>&quot;;
const autoTOC=&quot;<b:eval expr='data:skin.vars.autoTOC'/>&quot;;
const positionTOC=&quot;<b:eval expr='data:skin.vars.positionTOC'/>&quot;;
const isPreview=&quot;<b:eval expr='data:view.isPreview'/>&quot;;
const analyticId=&quot;<b:eval expr='data:skin.vars.analyticId  != &quot;&quot; ? data:skin.vars.analyticId : data:blog.analyticsAccountNumber'/>&quot;;
const caPubAdsense=&quot;<b:eval expr='data:skin.vars.caPubAdsense != &quot;&quot; ? data:skin.vars.caPubAdsense : data:blog.adsenseClientId'/>&quot;;

/*<![CDATA[*/
/*@shinsenter/defer.js@2.5.0*/
!function(r,i,t){var u,o=/^data-(.+)/,a='IntersectionObserver',c=/p/.test(i.readyState),s=[],f=s.slice,l='deferjs',n='load',e='pageshow',d='forEach',h='shift';function m(e){i.head.appendChild(e)}function v(e,n){f.call(e.attributes)[d](n)}function p(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function y(e,n){return f.call((n||i).querySelectorAll(e))}function b(t,e){y('source',t)[d](b),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){u(function(o){o=y(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=p(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&t.setAttribute(e.name,e.value)}),t.src&&!t.hasAttribute('async')?(t.onload=t.onerror=e,m(t)):(m(t),e()))}()})}(u=function(e,n){c?t(e,n):s.push(e,n)}).all=I,u.js=function(n,t,e,o){u(function(e){(e=p('SCRIPT',t,o)).src=n,m(e)},e)},u.css=function(n,t,e,o){u(function(e){(e=p('LINK',t,o)).rel='stylesheet',e.href=n,m(e)},e)},u.dom=function(e,n,t,z,o,i){function c(e){o&&!1===o(e)||b(e,t)}u(function(t){t=a in r&&new r[a](function(e){e[d](function(e,n){e.isIntersecting&&(n=e.target)&&(z&&z(n),t.unobserve(n),c(n))})},i),y(e||'[data-src]')[d](function(e){l in e||(e[l]=1,t?t.observe(e):c(e))})},n)},u.reveal=b,r.Defer=u,r.addEventListener('on'+e in r?e:n,function(){for(I();s[0];t(s[h](),s[h]()))c=1})}(this,document,setTimeout);'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');

function related_temp(e) {
  return (e.title ? "<div class='widget-title position-relative  mb-3 text-uppercase fw-light'><span>" + e.title + "</span></div>" : "") + "<div class='row row-cols-sm-2'>" + e.posts.map(function (data, i) {
    return "<article class='mb-4'><div class='h-100 overflow-hidden rounded position-relative border jt-border-light bg-archive shadow-sm'>" + (data.img ? "<div class='item-thumbnail'><a class='jt-bg-light d-block ratio ratio-21x9' href='" + data.url + "'><img alt='" + data.title + "' class='object-cover lazy-" + data.grup_id + " lazyload' data-src='" + data.img + "' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>" : "") + "<div class='item-content p-4'><h2 class='item-title fs-6 mb-2' itemprop='headline'><a class='text-reset' href='" + data.url + "'>" + data.title + "</a></h2></div></div></article>";
  }).join("") + "</div>";
}

function sitemap_temp(e) {
  return "<div class='accordion'>" + e.categories.map(function (data, i) {
    return "<div class='accordion-item'><input " + (i == 0 ? "checked" : "") + " id='sitemap-list-" + i + "' name='sitemap' type='radio' class='d-none'/><label for='sitemap-list-" + i + "' class='accordion-header accordion-button collapsed'>" + data.term + "</label><div class='accordion-collapse collapse border-top jt-border-light d-block-check'><div class='accordion-body'><div class='sitemap-list' data-label='" + data.term + "' data-func='sitemap_list_temp' data-items='9999'><div class='text-center'><div class='spinner-grow text-light' role='status'><span class='visually-hidden'>Loading...</span></div></div></div></div></div></div>";
  }).join("") + "</div>";
}

function sitemap_list_temp(e) {
  return "<ul class='list-unstyled fs-7'>" + e.posts.map(function (data, i) {
    return "<li class='mb-2'><a href='" + data.url + "'>" + data.title + "</a></li>";
  }).join("") + "</ul>";
}

function sitemap_cb(e) {
  var sm = ".sitemap-list";
  if (document.querySelector(sm) !== null) {
    Defer.dom(sm, 100, "loaded", jo.loadCustomPosts);
  }
}

function related_inline_temp(e) {
  return "<div class='px-3 py-2 mb-4 border border-3 jt-border-light rounded'>" + (e.title ? "<div class='fw-light pb-3'><span>" + e.title + "</span></div>" : "") + "<ul class='ps-3 fw-bold'>" + e.posts.map(function (data, i) {
    return "<li class='mb-2'><a href='" + data.url + "'>" + data.title + "</a></li>";
  }).join("") + "</ul></div>";
}

function sidebar_temp(e) {
  return (e.title ? "<div class='widget-title position-relative fs-6 mb-3'><span>" + e.title + "</span></div>" : "") + "<div class='mb-4'>" + e.posts.map(function (data, i) {
    return "<div class='item-post d-flex mb-3'>" + (data.img ? "<div class='item-thumbnail me-3' style='width:85px'><a class='rounded jt-bg-light overflow-hidden d-block ratio ratio-1x1' href='" + data.url + "'><img alt='" + data.title + "' class='object-cover lazy-" + data.grup_id + " lazyload' data-src='" + data.img + "' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>" : "") + "<div class='item-content col'><h3 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset' href='" + data.url + "'>" + data.title + "</a></h3><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-clock'/></svg>" + data.date + "</small></div></div></div>";
  }).join("") + "</div>";
}



function jtCallback(){
/*Your Script is here to maintain performance.*/


// the example below if you use url.
// Defer.css('your_css_url','your-style-id',100);
// Defer.js('your_script_url','your-script-id',100);


}
/*]]>*/</script>
<script src='https://cdn.jsdelivr.net/gh/jettheme/js@0.5.5/main.js'/>

<!-- Your Style and Script before </body> is here -->

<b:if cond='!data:view.isPreview'>&lt;textarea disabled readonly id=&quot;element-b&quot; style=&quot;display:none&quot;&gt;&lt;style&gt;/*</b:if></body><b:if cond='!data:view.isPreview'>*/&lt;/style&gt;&lt;/textarea&gt;<script>/*<![CDATA[*/const _eh=document.getElementById("element-h"),_eb=document.getElementById("element-b"),_WidgetManager={_PopupConfig:function(){}};null!==_eh&&(_eh.outerHTML=""),null!==_eb&&(_eb.outerHTML="");/*]]>*/</script>
&lt;/body&gt;</b:if>
</html>
