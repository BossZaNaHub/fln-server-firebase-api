import {Storage} from "./firebase"

class BucketManagement {
    filename: string

    constructor(filename: string) {
      this.filename = filename
    }

    public uploadFile() {
      const storageRef = Storage.upload(this.filename, {
        gzip: true,
        metadata: {
          cacheControl: "public, max-age=31536000",
        },
      }).then((upload) => {
        return `Upload Success ${this.filename}`
      })
      return storageRef.catch(console.error)
    }
}

export {BucketManagement}
