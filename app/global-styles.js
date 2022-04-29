import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .white {
    color: white !important;
  }

  .default {
    color: #3bb64a;
  }

  .m-0 { margin: 0px !important}

  .mt-0 { margin-top: 0px !important}
  .mt-5 { margin-top: 5px }
  .mt-10 { margin-top:10px }
  .mt-15 { margin-top:15px }
  .mt-20 { margin-top: 20px }
  .mt-25 { margin-top: 25px }

  .mb-0 { margin-bottom: 0px !important}
  .mb-5 { margin-bottom: 5px }
  .mb-10 { margin-bottom:10px }
  .mb-15 { margin-bottom:15px }
  .mb-20 { margin-bottom: 20px }
  .mb-25 { margin-bottom: 25px }

  .ml-10 { margin-left:10px }
  .ml-20 { margin-left: 20px }

  .mr-10 { margin-right:10px }
  .mr-20 { margin-right: 20px }

  .p-0 { padding: 0 !important}
  .p-5 { padding: 5px }
  .p-10 { padding:10px }
  .p-15 { padding:15px }
  .p-20 { padding: 20px }
  .p-25 { padding: 25px }

  .pt-5 { padding-top: 5px }
  .pt-10 { padding-top:10px }
  .pt-15 { padding-top:15px }
  .pt-20 { padding-top: 20px }
  .pt-25 { padding-top: 25px }

  .pl-10 {padding-left:10px;}
  .pl-20 {padding-left: 20px;}

  .pr-10 {padding-right:10px;}
  .pr-20 {padding-right: 20px;}

  .pb-20 { padding-bottom: 20px }
  .pb-25 { padding-bottom: 25px }


.float-left {
    float: left;
}

.float-right {
    float: right;
}
.font-bold {
  font-weight: bolder;
}

.ant-menu-item-selected, .ant-menu-item-selected a,.ant-menu-item-active, .ant-menu-item-selected a:hover, .ant-menu-item a:hover, 
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
  color: #3bb64a !important;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
  background-color: transparent !important;
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  border-right: 3px solid #3bb64a !important;
}

.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar,
.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar {
  top: 0;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn, .ant-tabs-tab:hover  {
  color: #3bb64a !important;
}
.ant-tabs-ink-bar {
  background: #3bb64a !important;
  height: 3px !important;
}

.card-p-0 > .ant-card-body {
  padding-top: 0 !important;
}
  `;

export default GlobalStyle;
