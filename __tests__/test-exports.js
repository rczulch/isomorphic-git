/* eslint-env node, browser, jasmine */
const git = require('isomorphic-git')

describe('exports', () => {
  it('exposes only the intended API functions', async () => {
    const names = Object.keys(git)
    expect(names.sort()).toMatchInlineSnapshot(`
      Array [
        "Errors",
        "STAGE",
        "TREE",
        "WORKDIR",
        "add",
        "addNote",
        "addRemote",
        "annotatedTag",
        "branch",
        "checkout",
        "clone",
        "commit",
        "currentBranch",
        "default",
        "deleteBranch",
        "deleteRef",
        "deleteRemote",
        "deleteTag",
        "expandOid",
        "expandRef",
        "fetch",
        "findMergeBase",
        "findRoot",
        "getConfig",
        "getConfigAll",
        "getRemoteInfo",
        "hashBlob",
        "indexPack",
        "init",
        "isDescendent",
        "listBranches",
        "listFiles",
        "listNotes",
        "listRemotes",
        "listTags",
        "log",
        "merge",
        "packObjects",
        "pull",
        "push",
        "readBlob",
        "readCommit",
        "readNote",
        "readObject",
        "readTag",
        "readTree",
        "remove",
        "removeNote",
        "resetIndex",
        "resolveRef",
        "setConfig",
        "status",
        "statusMatrix",
        "tag",
        "version",
        "walk",
        "writeBlob",
        "writeCommit",
        "writeObject",
        "writeRef",
        "writeTag",
        "writeTree",
      ]
    `)
  })
})
