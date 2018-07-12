import * as React from 'react';
import { IconProps } from './IconProps';
export function Atlasssian({ className, size = 16, width = size, height = size }: IconProps) {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={className}><g fill="none"><path d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3z" fill="#356CA6"></path><path d="M7.494 2.444a.72.72 0 1 1 1.33.55.72.72 0 0 1-1.33-.55zm-2.42.936a.72.72 0 1 1 1.439 0 .72.72 0 0 1-1.44 0zm7.155 1.275a.227.227 0 0 0-.14-.047l-.08.014c-.469.176-.95.32-1.439.433a.28.28 0 0 0-.2.173c-.326.9-1.172 1.765-2.052 2.665a.233.233 0 0 1-.16.08.227.227 0 0 1-.166-.08l-.056-.057C7.077 6.957 6.26 6.122 5.94 5.234a.28.28 0 0 0-.2-.173c-.49-.114-.97-.26-1.44-.44l-.08-.013a.227.227 0 0 0-.22.247c.074.753.374 1.485.907 2.252.505.725 1.093 1.325 1.691 1.935l.101.103.016.016c1.16 1.187 2.257 2.309 2.356 3.609.01.117.11.207.227.207h1.372a.227.227 0 0 0 .227-.24c-.04-.873-.373-1.746-1.006-2.672a8.392 8.392 0 0 0-.427-.566.167.167 0 0 1 .014-.214l.14-.14.005-.005c.631-.644 1.288-1.316 1.787-2.033.5-.72.833-1.5.906-2.252a.233.233 0 0 0-.087-.2zm-5.543 5.52a.207.207 0 0 0-.16-.067.227.227 0 0 0-.186.106c-.58.88-.88 1.712-.92 2.545a.227.227 0 0 0 .227.24h1.372c.12 0 .22-.093.227-.213.037-.433.167-.854.38-1.233a.32.32 0 0 0-.027-.34 12.68 12.68 0 0 0-.913-1.039zm3.838-7.515a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44z" fill="#fff" fillRule="evenodd" clipRule="evenodd"></path><path d="M8.158 5.345c.434 0 .68-.027.767-.027a.207.207 0 0 1 .186.294 3.647 3.647 0 0 1-.8 1.172.22.22 0 0 1-.16.06.22.22 0 0 1-.16-.06 3.644 3.644 0 0 1-.799-1.172.207.207 0 0 1 .187-.293c.087 0 .34.026.766.026h.013z" fill="#fff"></path></g></svg>
    );
}
