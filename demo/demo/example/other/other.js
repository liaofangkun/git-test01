Component({
  mixins: [],
  data: {
    key: '',
    data: '',
    keySync: '',
    dataSync: '',
    tempFilePath: '',
    savedFilePath: '',
    inputValue: '',
    outputValue: '',
  },
  props: {},
  didMount() {
    my.getStorage({
      key: 'savedFilePath', // 缓存数据的 key
      success: (res) => {
        this.setData({
          savedFilePath: res.data ? res.data : '',
        });
      },
    });

    this.refresh = my.on('refresh', () => {
      console.log('title clicked')
      my.alert({
        title: '亲',
        content: '您刚刚点击了刷新按钮哦~~~么么扎',
        buttonText: '我知道了',
      })
    })
  },
  didUpdate() {},
  didUnmount() {
    this.refresh.remove();
  },
  methods: {
    onInput: function (e) {
      this.setData({ inputValue: e.detail.value });
    },
    onEncrypt: function () {
      my.rsa({
        action: 'encrypt',
        text: this.data.inputValue,
        key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n' +
          'GzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n' +
          '3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n' +
          '3egOO2xOKzLpYSqfbQIDAQAB',
        success: (result) => {
          this.setData({ outputValue: result.text });
        },
        fail(e) {
          my.alert({
            content: e.errorMessage || e.error,
          });
        },
      });
    },
    onDecrypt: function () {
      my.rsa({
        action: 'decrypt',
        text: this.data.outputValue,
        key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' +
          'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' +
          'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' +
          'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' +
          'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' +
          'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' +
          '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' +
          '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' +
          'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' +
          'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' +
          'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' +
          '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' +
          'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',
        success: (result) => {
          this.setData({ outputValue: result.text });
        },
        fail(e) {
          my.alert({
            content: e.errorMessage || e.error,
          });
        },
      });
    },
    chooseImage() {
      my.chooseImage({
        count: 1,
        success: (res) => {
          console.log('chooseImage', res);
          this.setData({
            tempFilePath: res.apFilePaths[0],
          });
        },
      });
    },
    saveFile() {
      if (this.data.tempFilePath.length > 0) {
        const that = this;
        my.saveFile({
          apFilePath: this.data.tempFilePath,
          success(res) {
            console.log('saveFile', res);
            that.setData({
              savedFilePath: res.apFilePath,
            });
            my.setStorage({ key: 'savedFilePath', data: res.apFilePath });
            my.alert({
              title: '保存成功', // alert 框的标题
              content: `下次进入应用时，此文件仍可用:${JSON.stringify(res)}`,
            });
          },
        });
      }
    },
    getFileInfo() {
      my.getFileInfo({
        apFilePath: this.data.tempFilePath,
        digestAlgorithm: 'sha1',
        success: (res) => {
          my.alert({
            title: '文件信息',
            content: JSON.stringify(res),
          });
          console.log(JSON.stringify(res))
        }
      })
    },
    getSavedFileInfo() {
      my.getSavedFileInfo({
        apFilePath: this.data.savedFilePath,
        success: (res) => {
          my.alert({
            title: '文件信息',
            content: JSON.stringify(res),
          });
          console.log(JSON.stringify(res))
        }
      })
    },
    getSavedFileList() {
      my.getSavedFileList({
        success: (res) => {
          my.alert({
            title: '已保存文件列表',
            content: JSON.stringify(res),
          });
          console.log(JSON.stringify(res))
        }
      });
    },
    removeSavedFile() {
      my.getSavedFileList({
        success: (res) => {
          my.removeSavedFile({
            apFilePath: res.fileList[0].apFilePath,
            success: (res) => {
              my.alert({
                title: '移除文件成功',
                content: JSON.stringify(res),
              });
              console.log('remove success')
            }
          })
        }
      });
    },
    clear() {
      my.setStorage({ key: 'savedFilePath', data: '' })
      this.setData({
        tempFilePath: '',
        savedFilePath: '',
      });
    },
    keyChange(e) {
      console.log(e);
      this.setData({
        key: e.detail.value,
      });
    },

    dataChange(e) {
      this.setData({
        data: e.detail.value,
      });
    },

    keyChangeSync(e) {
      console.log(e);
      this.setData({
        keySync: e.detail.value,
      });
    },

    dataChangeSync(e) {
      this.setData({
        dataSync: e.detail.value,
      });
    },

    getStorage() {
      var key = this.data.key;
      var data = this.data.data;
      console.log('data: ', this.data);
      if (key.length === 0) {
        this.setData({
          key: key,
          data: data,
        });

        my.alert({
          title: '读取数据失败',
          content: 'key 不能为空',
        });
      } else {
        let that = this;
        my.getStorage({
          key,
          success(res) {
            my.alert({
              title: '读取数据成功',
              content: "data: '" + JSON.stringify(res.data) + "'",
            });
          },
        });
        console.log('读取数据成功', my.getStorageSync({ key }).data);
      }
    },

    setStorage() {
      var key = this.data.key;
      var data = this.data.data;
      if (key.length === 0) {
        this.setData({
          key: key,
          data: data,
        });

        my.alert({
          title: '保存数据失败',
          content: 'key 不能为空',
        });
      } else {
        let that = this;
        my.setStorage({
          key: key,
          data: data,
          success() {
            that.setData({
              key: key,
              data: data,
            });

            my.alert({
              title: '存储数据成功',
              content: `${key}: ${data}`,
            });
          },
        });
      }
    },

    removeStorage() {
      let that = this;
      my.removeStorage({
        key: that.data.key,
        success() {
          that.setData({
            key: '',
            data: '',
          });

          my.alert({
            content: '删除数据成功',
          });
        },
      });
    },
    clearStorage() {
      let that = this;
      my.clearStorage({
        key: that.data.key,
        success() {
          that.setData({
            key: '',
            data: '',
          });

          my.alert({
            content: '清除数据成功'
          });
        },
      });
    },
    getStorageInfo() {
      let that = this;
      my.getStorageInfo({
        success(res) {
          my.alert({
            content: JSON.stringify({
              keys: res.keys,
              currentSize: res.currentSize,
              limitSize: res.limitSize,
            }),
          });
        },
      });
    },

    getStorageSync() {
      var key = this.data.keySync;
      var data = this.data.dataSync;
      console.log('data: ', this.data);
      if (key.length === 0) {
        this.setData({
          keySync: key,
          dataSync: data,
        });

        my.alert({
          title: '同步读取数据失败',
          content: 'key 不能为空',
        });
      } else {
        let res = my.getStorageSync({ key: key });
        if (!res.error) {
          my.alert({
            title: '同步读取数据成功',
            content: "data: '" + JSON.stringify(res.data) + "'",
          });
        }
      }
    },

    setStorageSync() {
      var key = this.data.keySync;
      var data = this.data.dataSync;
      if (key.length === 0) {
        this.setData({
          keySync: key,
          dataSync: data,
        });

        my.alert({
          title: '同步保存数据失败',
          content: 'key 不能为空',
        });
      } else {
        let res = my.setStorageSync({ key: key, data: data });
        if (!res.error) {
          this.setData({
            keySync: key,
            dataSync: data,
          });

          my.alert({
            title: '同步存储数据成功',
            content: `${key}: ${data}`,
          });
        }
      }
    },

    removeStorageSync() {
      let res = my.removeStorageSync({ key: this.data.keySync });
      if (!res.error) {
        this.setData({
          keySync: '',
          dataSync: '',
        });

        my.alert({
          content: '同步删除数据成功',
        });
      }
    },
    clearStorageSync() {
      let res = my.clearStorageSync();
      if (!res.error) {
        this.setData({
          keySync: '',
          dataSync: '',
        });

        my.alert({
          content: '同步清除数据成功',
        });
      }
    },
    getStorageInfoSync() {
      let res = my.getStorageInfoSync();
      if (!res.error) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize,
          }),
        });
      }
    },
  },
});
