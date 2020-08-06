a = document.querySelectorAll(`.root.-selected.-accented`)[0].attributes[0].nodeName
document.querySelectorAll("vim-core-lesson-list-student-selector-item")[0].children[0].children[0].outerHTML+= `<div `+ a +`="" skyuitooltip="" skyuitooltipposition="below" class="remove"><sky-ui-icon `+ a +`="" name="new/cross-circle-fill" size="s" _nghost-vbq-c11="" class="-size-s"><svg `+ a +`=""><use `+ a +`="" xlink:href="#new/cross-circle-fill"></use></svg><!----><!----></sky-ui-icon></div>`

let mstl = document.createElement('style');
document.body.append(mstl);
var style = `

.root[`+ a +`] {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64px;
    padding: 6px 6px 0;
    cursor: pointer;
  }
  
  .remove[`+ a +`] {
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
  
  .root[`+ a +`]:hover   .remove[`+ a +`] {
    display: block;
  }
  
  .remove[`+ a +`]:hover {
    opacity: 1;
  }
  
  .icon[`+ a +`] {
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
  
  .icon[`+ a +`]:hover {
    background-color: rgba(var(--sky-ui-kit-color-background-baseRgb), 0.32);
  }
  
  .root.-selected[`+ a +`]   .icon[`+ a +`]::before {
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
  
  .title[`+ a +`] {
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
  
  .root.-accented[`+ a +`]   .title[`+ a +`] {
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
  
  [_nghost-vbq-c11]   div[`+ a +`] {
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
