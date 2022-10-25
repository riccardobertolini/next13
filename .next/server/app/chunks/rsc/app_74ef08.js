(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/app_74ef08.js", {

"[project-with-next]/app/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    return data;
}
function Page() {
    const data = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__["use"](getData());
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"](__TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["Fragment"], {
        children: data?.map((todo)=>{
            return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("h4", {
                        children: todo.title
                    }),
                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("p", {
                        children: [
                            "Status: ",
                            todo.completed ? 'Completed' : 'Not Completed'
                        ]
                    })
                ]
            }, todo.id);
        })
    });
}

})()),
"[project-with-next]/app/layout.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>RootLayout
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-runtime.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function RootLayout({ children  }) {
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("html", {
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("head", {}),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("body", {
                children: children
            })
        ]
    });
}

})()),
}]);


//# sourceMappingURL=app_74ef08.js.5c04c096b3b3866c.map