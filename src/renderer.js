/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/*
 * This file uses the library LiteLoaderQQNT (https://github.com/LiteLoaderQQNT/LiteLoaderQQNT)
 * The following is its license
 * MIT License
 *
 * Copyright (c) 2023 LiteLoaderQQNT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// 运行在 Electron 渲染进程 下的页面脚本
import {EventChannel, MessageChain, PlainText} from "../LiteLoaderQQNT-Euphony/src/index.js";

let REPLY_RULES = new Map(
    [
        [
            /Hello world\?/,
            [
                "Hello,",
                "world!"
            ]
        ],
        [
            /^Thank you world$/,
            [
                "Thank you world!"
            ]
        ]
    ]
)

const eventChannel = EventChannel.withTriggers()

eventChannel.subscribeEvent('receive-message', (message, source) => {
    let str = message.contentToString();
    REPLY_RULES.forEach((v, k) => {
        if (str.search(k) >= 0) {
            v.forEach(m => {
                source.getContact().sendMessage(new MessageChain().append(new PlainText(m)))
            })
        }
    })
})


// Vue组件挂载时触发
export const onVueComponentMount = (component) => {
    // component 为 Vue Component 对象
}


// Vue组件卸载时触发
export const onVueComponentUnmount = (component) => {
    // component 为 Vue Component 对象
}