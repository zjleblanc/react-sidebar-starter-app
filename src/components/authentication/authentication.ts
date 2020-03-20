// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
export const authenticate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            name: "Zachary LeBlanc",
            uid: "1"
        }), 1000)
    });
}

export const checkIfAuthenticated = (store: any) => {
    return store.getState().isAuthed;
}