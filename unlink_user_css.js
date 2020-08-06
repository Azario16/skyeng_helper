document.querySelectorAll("vim-core-lesson-list-student-selector-item")[0].children[0].children[0].outerHTML+= `<div _ngcontent-vbq-c242="" skyuitooltip="" skyuitooltipposition="below" class="remove"><sky-ui-icon _ngcontent-vbq-c242="" name="new/cross-circle-fill" size="s" _nghost-vbq-c11="" class="-size-s"><svg _ngcontent-vbq-c11=""><use _ngcontent-vbq-c11="" xlink:href="#new/cross-circle-fill"></use></svg><!----><!----></sky-ui-icon></div>`

let mstl = document.createElement('style');
document.body.append(mstl);
var style = `

  .root[_ngcontent-vbq-c242] {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64px;
    padding: 6px 6px 0;
    cursor: pointer;
  }
  
  .remove[_ngcontent-vbq-c242] {
    position: absolute;
    top: -2px;
    left: calc(50% + 4px);
    display: none;
    width: 16px;
    height: 16px;
    fill: var(--sky-ui-kit-color-text-inversed);
    background-color: var(--sky-ui-kit-color-brand-base);
    border: solid 2px var(--sky-ui-kit-color-brand-base);
    border-radius: 50%;
    cursor: pointer;
    opacity: .8;
    z-index: 1;
  }
  
  .root[_ngcontent-vbq-c242]:hover   .remove[_ngcontent-vbq-c242] {
    display: block;
  }
  
  .remove[_ngcontent-vbq-c242]:hover {
    opacity: 1;
  }
  
  .icon[_ngcontent-vbq-c242] {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: rgba(var(--sky-ui-kit-color-background-baseRgb), 0.24);
    fill: var(--sky-ui-kit-color-text-inversed);
  }
  
  .icon[_ngcontent-vbq-c242]:hover {
    background-color: rgba(var(--sky-ui-kit-color-background-baseRgb), 0.32);
  }
  
  .root.-selected[_ngcontent-vbq-c242]   .icon[_ngcontent-vbq-c242]::before {
    content: "";
    position: absolute;
    top: calc(50% - 26px);
    left: calc(50% - 26px);
    width: 52px;
    height: 52px;
    border: 2px solid rgba(var(--sky-ui-kit-color-background-baseRgb), 0.8);
    border-radius: 50%;
    box-sizing: border-box;
  }
  
  .title[_ngcontent-vbq-c242] {
    font-size: var(--sky-ui-kit-font-size-h6-fontSize);
    line-height: var(--sky-ui-kit-font-size-h6-lineHeight);
    font-weight: var(--sky-ui-kit-font-size-h6-fontWeight);
    width: 100%;
    height: 36px;
    margin-top: 10px;
    color: var(--sky-ui-kit-color-text-inversed);
    text-align: center;
    overflow: hidden;
    opacity: .8;
  }
  
  .root.-accented[_ngcontent-vbq-c242]   .title[_ngcontent-vbq-c242] {
    opacity: 1;
  }
  [_nghost-vbq-c11] {
    display: inline-block;
    background-repeat: no-repeat;
  }
  
  [_nghost-vbq-c11]     svg {
    display: block;
    width: inherit;
    height: inherit;
  }
  
  [_nghost-vbq-c11]   div[_ngcontent-vbq-c11] {
    width: inherit;
    height: inherit;
  }
  
  .-size-xs[_nghost-vbq-c11] {
    width: 10px;
    height: 10px;
  }
  
  .-size-s[_nghost-vbq-c11] {
    width: 16px;
    height: 16px;
  }
  
  .-size-m[_nghost-vbq-c11] {
    width: 24px;
    height: 24px;
  }
  
  .-size-l[_nghost-vbq-c11] {
    width: 32px;
    height: 32px;
  }
  
  .-size-xl[_nghost-vbq-c11] {
    width: 48px;
    height: 48px;
  }`
mstl.innerHTML = style;
