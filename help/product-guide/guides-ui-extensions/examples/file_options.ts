enum VIEW_STATE {
  APPEND = 'append',
  PREPEND = 'prepend',
  REPLACE = 'replace',
}

const loadDitaFile = (filePath, uuid) =>{
  return $.ajax({
    type: 'POST',
    url: '/bin/referencelistener',
    data: {
        operation: 'getdita',
        path: filePath,
        type: uuid ? 'UUID' : 'PATH',
        cache: false,
    },
  })
}

const fileOptions = {
  id: "file_options",
  contextMenuWidget: "repository_panel",
  view: {
    items: [
      {
        component: "div",
        target: {
          key: "displayName", value: "Delete",
          viewState: VIEW_STATE.REPLACE
        }
      },
      {
        component: "div",
        target: {
          key: "displayName", value: "Edit",
          viewState: VIEW_STATE.REPLACE
        }
      },
      {
        "displayName": "Download",
        "data": {
          "eventid": "downloadFile"
        },
        "icon": "downloadFromCloud",
        "class": "menu-separator",
        target: {
          key: "displayName", value: "Duplicate",
          viewState: VIEW_STATE.REPLACE
        }
      },
    ]
  },

  controller: {
    downloadFile() {
      const path = this.getValue('selectedItems')[0].path
      loadDitaFile(path, true).then((file) => {
        function download_file(name, contents) {
          const mime_type = "text/plain";

          const blob = new Blob([contents], { type: mime_type });

          const dlink = document.createElement('a');
          dlink.download = name;
          dlink.href = window.URL.createObjectURL(blob);
          dlink.onclick = function () {
            // revokeObjectURL needs a delay to work properly
            const that = this;
            setTimeout(function () {
              window.URL.revokeObjectURL(that.href);
            }, 1500);
          };

          dlink.click();
          dlink.remove();
        }
        download_file(path, file.xml)

      });
    }
  }
}

export default fileOptions
