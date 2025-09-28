"use client";
// import { createContext, serverCaller } from '@/utils/trpc'
import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import { Key, useState } from "react";
import { useUppyState } from './useUppyState'

// export default async function Home() {

//     // 创建 context
//     const context = await createContext()

//     // 使用 createCallerFactory 创建的 caller
//     const caller = serverCaller(context)

//     // 调用 API
//     const helloData = await caller.hello()
//     const worldData = await caller.world()

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <p>Hello: {helloData}</p>
//             <p>World: {worldData}</p>
//         </div>
//     )
// }

export default function Home() {
  const [uppy] = useState(() => {
    // 创建 Uppy 实例
    const uppy = new Uppy({
      debug: true,
      autoProceed: true,
    });
    // 添加 AWS S3 插件
    uppy.use(AwsS3, {
      shouldUseMultipart: false,
      getUploadParameters(file) {
        return fetch("/presigned-url", {
          method: "POST",
          body: JSON.stringify({ filename: file.name, contentType: file.type }),
        }).then((response) => response.json());
      },
    });

    return uppy;
  });

  const files = useUppyState(uppy, (s) => Object.values(s.files))

  return (
    <div className="h-screen flex items-center justify-center">
     <input type="file" multiple onChange={
        (e) => {
            if(e.target.files?.length) {
                Array.from(e.target.files).forEach((file) => {
                    uppy.addFile({
                        data: file,
                        name: file.name,
                    })
                })
            }
        }
     }/>
     { files.map((file: { data: Blob | MediaSource; id: Key | null | undefined; name: string | undefined; }) => {
        const url = URL.createObjectURL(file.data)
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={file.id} src={url} alt={file.name}></img>
        )
     }) }
    </div>
  );
}
