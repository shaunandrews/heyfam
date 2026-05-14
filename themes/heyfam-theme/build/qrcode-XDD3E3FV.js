import {
  __commonJS,
  __require
} from "./chunk-7D4SUZUM.js";

// node_modules/qrcode-svg/lib/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode-svg/lib/qrcode.js"(exports, module) {
    function QR8bitByte(data) {
      this.mode = QRMode.MODE_8BIT_BYTE;
      this.data = data;
      this.parsedData = [];
      for (var i2 = 0, l = this.data.length; i2 < l; i2++) {
        var byteArray = [];
        var code = this.data.charCodeAt(i2);
        if (code > 65536) {
          byteArray[0] = 240 | (code & 1835008) >>> 18;
          byteArray[1] = 128 | (code & 258048) >>> 12;
          byteArray[2] = 128 | (code & 4032) >>> 6;
          byteArray[3] = 128 | code & 63;
        } else if (code > 2048) {
          byteArray[0] = 224 | (code & 61440) >>> 12;
          byteArray[1] = 128 | (code & 4032) >>> 6;
          byteArray[2] = 128 | code & 63;
        } else if (code > 128) {
          byteArray[0] = 192 | (code & 1984) >>> 6;
          byteArray[1] = 128 | code & 63;
        } else {
          byteArray[0] = code;
        }
        this.parsedData.push(byteArray);
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData);
      if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
      }
    }
    QR8bitByte.prototype = {
      getLength: function(buffer) {
        return this.parsedData.length;
      },
      write: function(buffer) {
        for (var i2 = 0, l = this.parsedData.length; i2 < l; i2++) {
          buffer.put(this.parsedData[i2], 8);
        }
      }
    };
    function QRCodeModel(typeNumber, errorCorrectLevel) {
      this.typeNumber = typeNumber;
      this.errorCorrectLevel = errorCorrectLevel;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = [];
    }
    QRCodeModel.prototype = { addData: function(data) {
      var newData = new QR8bitByte(data);
      this.dataList.push(newData);
      this.dataCache = null;
    }, isDark: function(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
        throw new Error(row + "," + col);
      }
      return this.modules[row][col];
    }, getModuleCount: function() {
      return this.moduleCount;
    }, make: function() {
      this.makeImpl(false, this.getBestMaskPattern());
    }, makeImpl: function(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
        for (var col = 0; col < this.moduleCount; col++) {
          this.modules[row][col] = null;
        }
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(test);
      }
      if (this.dataCache == null) {
        this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }
      this.mapData(this.dataCache, maskPattern);
    }, setupPositionProbePattern: function(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    }, getBestMaskPattern: function() {
      var minLostPoint = 0;
      var pattern = 0;
      for (var i2 = 0; i2 < 8; i2++) {
        this.makeImpl(true, i2);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i2 == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i2;
        }
      }
      return pattern;
    }, createMovieClip: function(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      var cs = 1;
      this.make();
      for (var row = 0; row < this.modules.length; row++) {
        var y = row * cs;
        for (var col = 0; col < this.modules[row].length; col++) {
          var x = col * cs;
          var dark = this.modules[row][col];
          if (dark) {
            qr_mc.beginFill(0, 100);
            qr_mc.moveTo(x, y);
            qr_mc.lineTo(x + cs, y);
            qr_mc.lineTo(x + cs, y + cs);
            qr_mc.lineTo(x, y + cs);
            qr_mc.endFill();
          }
        }
      }
      return qr_mc;
    }, setupTimingPattern: function() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
      }
      for (var c = 8; c < this.moduleCount - 8; c++) {
        if (this.modules[6][c] != null) {
          continue;
        }
        this.modules[6][c] = c % 2 == 0;
      }
    }, setupPositionAdjustPattern: function() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i2 = 0; i2 < pos.length; i2++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i2];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    }, setupTypeNumber: function(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i2 = 0; i2 < 18; i2++) {
        var mod = !test && (bits >> i2 & 1) == 1;
        this.modules[Math.floor(i2 / 3)][i2 % 3 + this.moduleCount - 8 - 3] = mod;
      }
      for (var i2 = 0; i2 < 18; i2++) {
        var mod = !test && (bits >> i2 & 1) == 1;
        this.modules[i2 % 3 + this.moduleCount - 8 - 3][Math.floor(i2 / 3)] = mod;
      }
    }, setupTypeInfo: function(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      for (var i2 = 0; i2 < 15; i2++) {
        var mod = !test && (bits >> i2 & 1) == 1;
        if (i2 < 6) {
          this.modules[i2][8] = mod;
        } else if (i2 < 8) {
          this.modules[i2 + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i2][8] = mod;
        }
      }
      for (var i2 = 0; i2 < 15; i2++) {
        var mod = !test && (bits >> i2 & 1) == 1;
        if (i2 < 8) {
          this.modules[8][this.moduleCount - i2 - 1] = mod;
        } else if (i2 < 9) {
          this.modules[8][15 - i2 - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i2 - 1] = mod;
        }
      }
      this.modules[this.moduleCount - 8][8] = !test;
    }, mapData: function(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };
    QRCodeModel.PAD0 = 236;
    QRCodeModel.PAD1 = 17;
    QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new QRBitBuffer();
      for (var i2 = 0; i2 < dataList.length; i2++) {
        var data = dataList[i2];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      var totalDataCount = 0;
      for (var i2 = 0; i2 < rsBlocks.length; i2++) {
        totalDataCount += rsBlocks[i2].dataCount;
      }
      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
      }
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }
      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeModel.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeModel.PAD1, 8);
      }
      return QRCodeModel.createBytes(buffer, rsBlocks);
    };
    QRCodeModel.createBytes = function(buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i2 = 0; i2 < dcdata[r].length; i2++) {
          dcdata[r][i2] = 255 & buffer.buffer[i2 + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i2 = 0; i2 < ecdata[r].length; i2++) {
          var modIndex = i2 + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i2] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var totalCodeCount = 0;
      for (var i2 = 0; i2 < rsBlocks.length; i2++) {
        totalCodeCount += rsBlocks[i2].totalCount;
      }
      var data = new Array(totalCodeCount);
      var index = 0;
      for (var i2 = 0; i2 < maxDcCount; i2++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i2 < dcdata[r].length) {
            data[index++] = dcdata[r][i2];
          }
        }
      }
      for (var i2 = 0; i2 < maxEcCount; i2++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i2 < ecdata[r].length) {
            data[index++] = ecdata[r][i2];
          }
        }
      }
      return data;
    };
    var QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
    var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
    var QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
    var QRUtil = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    }, getBCHTypeNumber: function(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    }, getBCHDigit: function(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    }, getPatternPosition: function(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    }, getMask: function(maskPattern, i2, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i2 + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i2 % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i2 + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i2 / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i2 * j % 2 + i2 * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i2 * j % 2 + i2 * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i2 * j % 3 + (i2 + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }, getErrorCorrectPolynomial: function(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i2 = 0; i2 < errorCorrectLength; i2++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i2)], 0));
      }
      return a;
    }, getLengthInBits: function(mode, type) {
      if (1 <= type && type < 10) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 27) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 41) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + mode);
        }
      } else {
        throw new Error("type:" + type);
      }
    }, getLostPoint: function(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0;
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }
            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }
              if (r == 0 && c == 0) {
                continue;
              }
              if (dark == qrCode.isDark(row + r, col + c)) {
                sameCount++;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }
      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col)) count++;
          if (qrCode.isDark(row + 1, col)) count++;
          if (qrCode.isDark(row, col + 1)) count++;
          if (qrCode.isDark(row + 1, col + 1)) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }
      var darkCount = 0;
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };
    var QRMath = { glog: function(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    }, gexp: function(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
    for (i = 0; i < 8; i++) {
      QRMath.EXP_TABLE[i] = 1 << i;
    }
    var i;
    for (i = 8; i < 256; i++) {
      QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }
    var i;
    for (i = 0; i < 255; i++) {
      QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }
    var i;
    function QRPolynomial(num, shift) {
      if (num.length == void 0) {
        throw new Error(num.length + "/" + shift);
      }
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset++;
      }
      this.num = new Array(num.length - offset + shift);
      for (var i2 = 0; i2 < num.length - offset; i2++) {
        this.num[i2] = num[i2 + offset];
      }
    }
    QRPolynomial.prototype = { get: function(index) {
      return this.num[index];
    }, getLength: function() {
      return this.num.length;
    }, multiply: function(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i2 = 0; i2 < this.getLength(); i2++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i2 + j] ^= QRMath.gexp(QRMath.glog(this.get(i2)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    }, mod: function(e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }
      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
      var num = new Array(this.getLength());
      for (var i2 = 0; i2 < this.getLength(); i2++) {
        num[i2] = this.get(i2);
      }
      for (var i2 = 0; i2 < e.getLength(); i2++) {
        num[i2] ^= QRMath.gexp(QRMath.glog(e.get(i2)) + ratio);
      }
      return new QRPolynomial(num, 0).mod(e);
    } };
    function QRRSBlock(totalCount, dataCount) {
      this.totalCount = totalCount;
      this.dataCount = dataCount;
    }
    QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
      var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
      if (rsBlock == void 0) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var list = [];
      for (var i2 = 0; i2 < length; i2++) {
        var count = rsBlock[i2 * 3 + 0];
        var totalCount = rsBlock[i2 * 3 + 1];
        var dataCount = rsBlock[i2 * 3 + 2];
        for (var j = 0; j < count; j++) {
          list.push(new QRRSBlock(totalCount, dataCount));
        }
      }
      return list;
    };
    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
          return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    function QRBitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    QRBitBuffer.prototype = { get: function(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    }, put: function(num, length) {
      for (var i2 = 0; i2 < length; i2++) {
        this.putBit((num >>> length - i2 - 1 & 1) == 1);
      }
    }, getLengthInBits: function() {
      return this.length;
    }, putBit: function(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    } };
    var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    function QRCode(options) {
      var instance = this;
      this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M"
      };
      if (typeof options === "string") {
        options = {
          content: options
        };
      }
      if (options) {
        for (var i2 in options) {
          this.options[i2] = options[i2];
        }
      }
      if (typeof this.options.content !== "string") {
        throw new Error("Expected 'content' as string!");
      }
      if (this.options.content.length === 0) {
        throw new Error("Expected 'content' to be non-empty!");
      }
      if (!(this.options.padding >= 0)) {
        throw new Error("Expected 'padding' value to be non-negative!");
      }
      if (!(this.options.width > 0) || !(this.options.height > 0)) {
        throw new Error("Expected 'width' or 'height' value to be higher than zero!");
      }
      function _getErrorCorrectLevel(ecl2) {
        switch (ecl2) {
          case "L":
            return QRErrorCorrectLevel.L;
          case "M":
            return QRErrorCorrectLevel.M;
          case "Q":
            return QRErrorCorrectLevel.Q;
          case "H":
            return QRErrorCorrectLevel.H;
          default:
            throw new Error("Unknwon error correction level: " + ecl2);
        }
      }
      function _getTypeNumber(content2, ecl2) {
        var length = _getUTF8Length(content2);
        var type2 = 1;
        var limit = 0;
        for (var i3 = 0, len = QRCodeLimitLength.length; i3 <= len; i3++) {
          var table = QRCodeLimitLength[i3];
          if (!table) {
            throw new Error("Content too long: expected " + limit + " but got " + length);
          }
          switch (ecl2) {
            case "L":
              limit = table[0];
              break;
            case "M":
              limit = table[1];
              break;
            case "Q":
              limit = table[2];
              break;
            case "H":
              limit = table[3];
              break;
            default:
              throw new Error("Unknwon error correction level: " + ecl2);
          }
          if (length <= limit) {
            break;
          }
          type2++;
        }
        if (type2 > QRCodeLimitLength.length) {
          throw new Error("Content too long");
        }
        return type2;
      }
      function _getUTF8Length(content2) {
        var result = encodeURI(content2).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return result.length + (result.length != content2 ? 3 : 0);
      }
      var content = this.options.content;
      var type = _getTypeNumber(content, this.options.ecl);
      var ecl = _getErrorCorrectLevel(this.options.ecl);
      this.qrcode = new QRCodeModel(type, ecl);
      this.qrcode.addData(content);
      this.qrcode.make();
    }
    QRCode.prototype.svg = function(opt) {
      var options = this.options || {};
      var modules = this.qrcode.modules;
      if (typeof opt == "undefined") {
        opt = { container: options.container || "svg" };
      }
      var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
      var indent = pretty ? "  " : "";
      var EOL = pretty ? "\r\n" : "";
      var width = options.width;
      var height = options.height;
      var length = modules.length;
      var xsize = width / (length + 2 * options.padding);
      var ysize = height / (length + 2 * options.padding);
      var join = typeof options.join != "undefined" ? !!options.join : false;
      var swap = typeof options.swap != "undefined" ? !!options.swap : false;
      var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
      var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
      var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + " v" + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : "";
      var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
      var modrect = "";
      var pathdata = "";
      for (var y = 0; y < length; y++) {
        for (var x = 0; x < length; x++) {
          var module2 = modules[x][y];
          if (module2) {
            var px = x * xsize + options.padding * xsize;
            var py = y * ysize + options.padding * ysize;
            if (swap) {
              var t = px;
              px = py;
              py = t;
            }
            if (join) {
              var w = xsize + px;
              var h = ysize + py;
              px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
              py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
              w = Number.isInteger(w) ? Number(w) : w.toFixed(2);
              h = Number.isInteger(h) ? Number(h) : h.toFixed(2);
              pathdata += "M" + px + "," + py + " V" + h + " H" + w + " V" + py + " H" + px + " Z ";
            } else if (predefined) {
              modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
            } else {
              modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
            }
          }
        }
      }
      if (join) {
        modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
      }
      var svg = "";
      switch (opt.container) {
        //Wrapped in SVG document
        case "svg":
          if (xmlDeclaration) {
            svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
          }
          svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += "</svg>";
          break;
        //Viewbox for responsive use in a browser, thanks to @danioso
        case "svg-viewbox":
          if (xmlDeclaration) {
            svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
          }
          svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += "</svg>";
          break;
        //Wrapped in group element    
        case "g":
          svg += '<g width="' + width + '" height="' + height + '">' + EOL;
          svg += defs + bgrect + modrect;
          svg += "</g>";
          break;
        //Without a container
        default:
          svg += (defs + bgrect + modrect).replace(/^\s+/, "");
          break;
      }
      return svg;
    };
    QRCode.prototype.save = function(file, callback) {
      var data = this.svg();
      if (typeof callback != "function") {
        callback = function(error, result) {
        };
      }
      try {
        var fs = __require("fs");
        fs.writeFile(file, data, callback);
      } catch (e) {
        callback(e);
      }
    };
    if (typeof module != "undefined") {
      module.exports = QRCode;
    }
  }
});
export default require_qrcode();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3FyY29kZS1zdmcvbGliL3FyY29kZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiAtIG1vZGlmaWVkIGRhdmlkc2hpbWpzL3FyY29kZWpzIGxpYnJhcnkgZm9yIHVzZSBpbiBub2RlLmpzXG4gKiAtIFVzaW5nIHRoZSAnUVJDb2RlIGZvciBKYXZhc2NyaXB0IGxpYnJhcnknXG4gKiAtIEZpeGVkIGRhdGFzZXQgb2YgJ1FSQ29kZSBmb3IgSmF2YXNjcmlwdCBsaWJyYXJ5JyBmb3Igc3VwcG9ydCBmdWxsLXNwZWMuXG4gKiAtIHRoaXMgbGlicmFyeSBoYXMgbm8gZGVwZW5kZW5jaWVzLlxuICpcbiAqIEB2ZXJzaW9uIDAuOS4xICgyMDE2LTAyLTEyKVxuICogQGF1dGhvciBkYXZpZHNoaW1qcywgcGFwbmt1a25cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3LmQtcHJvamVjdC5jb20vPC9hPlxuICogQHNlZSA8YSBocmVmPVwiaHR0cDovL2plcm9tZWV0aWVubmUuZ2l0aHViLmNvbS9qcXVlcnktcXJjb2RlL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly9qZXJvbWVldGllbm5lLmdpdGh1Yi5jb20vanF1ZXJ5LXFyY29kZS88L2E+XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF2aWRzaGltanMvcXJjb2RlanNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2dpdGh1Yi5jb20vZGF2aWRzaGltanMvcXJjb2RlanM8L2E+XG4gKi9cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZiBcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXG4vLyAgIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gUVI4Yml0Qnl0ZShkYXRhKSB7XG4gIHRoaXMubW9kZSA9IFFSTW9kZS5NT0RFXzhCSVRfQllURTtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wYXJzZWREYXRhID0gW107XG5cbiAgLy8gQWRkZWQgdG8gc3VwcG9ydCBVVEYtOCBDaGFyYWN0ZXJzXG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBieXRlQXJyYXkgPSBbXTtcbiAgICB2YXIgY29kZSA9IHRoaXMuZGF0YS5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGNvZGUgPiAweDEwMDAwKSB7XG4gICAgICBieXRlQXJyYXlbMF0gPSAweEYwIHwgKChjb2RlICYgMHgxQzAwMDApID4+PiAxOCk7XG4gICAgICBieXRlQXJyYXlbMV0gPSAweDgwIHwgKChjb2RlICYgMHgzRjAwMCkgPj4+IDEyKTtcbiAgICAgIGJ5dGVBcnJheVsyXSA9IDB4ODAgfCAoKGNvZGUgJiAweEZDMCkgPj4+IDYpO1xuICAgICAgYnl0ZUFycmF5WzNdID0gMHg4MCB8IChjb2RlICYgMHgzRik7XG4gICAgfSBlbHNlIGlmIChjb2RlID4gMHg4MDApIHtcbiAgICAgIGJ5dGVBcnJheVswXSA9IDB4RTAgfCAoKGNvZGUgJiAweEYwMDApID4+PiAxMik7XG4gICAgICBieXRlQXJyYXlbMV0gPSAweDgwIHwgKChjb2RlICYgMHhGQzApID4+PiA2KTtcbiAgICAgIGJ5dGVBcnJheVsyXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+IDB4ODApIHtcbiAgICAgIGJ5dGVBcnJheVswXSA9IDB4QzAgfCAoKGNvZGUgJiAweDdDMCkgPj4+IDYpO1xuICAgICAgYnl0ZUFycmF5WzFdID0gMHg4MCB8IChjb2RlICYgMHgzRik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ5dGVBcnJheVswXSA9IGNvZGU7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJzZWREYXRhLnB1c2goYnl0ZUFycmF5KTtcbiAgfVxuXG4gIHRoaXMucGFyc2VkRGF0YSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRoaXMucGFyc2VkRGF0YSk7XG5cbiAgaWYgKHRoaXMucGFyc2VkRGF0YS5sZW5ndGggIT0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgIHRoaXMucGFyc2VkRGF0YS51bnNoaWZ0KDE5MSk7XG4gICAgdGhpcy5wYXJzZWREYXRhLnVuc2hpZnQoMTg3KTtcbiAgICB0aGlzLnBhcnNlZERhdGEudW5zaGlmdCgyMzkpO1xuICB9XG59XG5cblFSOGJpdEJ5dGUucHJvdG90eXBlID0ge1xuICBnZXRMZW5ndGg6IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZWREYXRhLmxlbmd0aDtcbiAgfSxcbiAgd3JpdGU6IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMucGFyc2VkRGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGJ1ZmZlci5wdXQodGhpcy5wYXJzZWREYXRhW2ldLCA4KTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFFSQ29kZU1vZGVsKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XG4gIHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG4gIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbDtcbiAgdGhpcy5tb2R1bGVzID0gbnVsbDtcbiAgdGhpcy5tb2R1bGVDb3VudCA9IDA7XG4gIHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcbiAgdGhpcy5kYXRhTGlzdCA9IFtdO1xufVxuXG5RUkNvZGVNb2RlbC5wcm90b3R5cGU9e2FkZERhdGE6ZnVuY3Rpb24oZGF0YSl7dmFyIG5ld0RhdGE9bmV3IFFSOGJpdEJ5dGUoZGF0YSk7dGhpcy5kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO3RoaXMuZGF0YUNhY2hlPW51bGw7fSxpc0Rhcms6ZnVuY3Rpb24ocm93LGNvbCl7aWYocm93PDB8fHRoaXMubW9kdWxlQ291bnQ8PXJvd3x8Y29sPDB8fHRoaXMubW9kdWxlQ291bnQ8PWNvbCl7dGhyb3cgbmV3IEVycm9yKHJvdytcIixcIitjb2wpO31cbnJldHVybiB0aGlzLm1vZHVsZXNbcm93XVtjb2xdO30sZ2V0TW9kdWxlQ291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2R1bGVDb3VudDt9LG1ha2U6ZnVuY3Rpb24oKXt0aGlzLm1ha2VJbXBsKGZhbHNlLHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO30sbWFrZUltcGw6ZnVuY3Rpb24odGVzdCxtYXNrUGF0dGVybil7dGhpcy5tb2R1bGVDb3VudD10aGlzLnR5cGVOdW1iZXIqNCsxNzt0aGlzLm1vZHVsZXM9bmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO2Zvcih2YXIgcm93PTA7cm93PHRoaXMubW9kdWxlQ291bnQ7cm93Kyspe3RoaXMubW9kdWxlc1tyb3ddPW5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtmb3IodmFyIGNvbD0wO2NvbDx0aGlzLm1vZHVsZUNvdW50O2NvbCsrKXt0aGlzLm1vZHVsZXNbcm93XVtjb2xdPW51bGw7fX1cbnRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApO3RoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCk7dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KTt0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTt0aGlzLnNldHVwVHlwZUluZm8odGVzdCxtYXNrUGF0dGVybik7aWYodGhpcy50eXBlTnVtYmVyPj03KXt0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTt9XG5pZih0aGlzLmRhdGFDYWNoZT09bnVsbCl7dGhpcy5kYXRhQ2FjaGU9UVJDb2RlTW9kZWwuY3JlYXRlRGF0YSh0aGlzLnR5cGVOdW1iZXIsdGhpcy5lcnJvckNvcnJlY3RMZXZlbCx0aGlzLmRhdGFMaXN0KTt9XG50aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsbWFza1BhdHRlcm4pO30sc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybjpmdW5jdGlvbihyb3csY29sKXtmb3IodmFyIHI9LTE7cjw9NztyKyspe2lmKHJvdytyPD0tMXx8dGhpcy5tb2R1bGVDb3VudDw9cm93K3IpY29udGludWU7Zm9yKHZhciBjPS0xO2M8PTc7YysrKXtpZihjb2wrYzw9LTF8fHRoaXMubW9kdWxlQ291bnQ8PWNvbCtjKWNvbnRpbnVlO2lmKCgwPD1yJiZyPD02JiYoYz09MHx8Yz09NikpfHwoMDw9YyYmYzw9NiYmKHI9PTB8fHI9PTYpKXx8KDI8PXImJnI8PTQmJjI8PWMmJmM8PTQpKXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT10cnVlO31lbHNle3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPWZhbHNlO319fX0sZ2V0QmVzdE1hc2tQYXR0ZXJuOmZ1bmN0aW9uKCl7dmFyIG1pbkxvc3RQb2ludD0wO3ZhciBwYXR0ZXJuPTA7Zm9yKHZhciBpPTA7aTw4O2krKyl7dGhpcy5tYWtlSW1wbCh0cnVlLGkpO3ZhciBsb3N0UG9pbnQ9UVJVdGlsLmdldExvc3RQb2ludCh0aGlzKTtpZihpPT0wfHxtaW5Mb3N0UG9pbnQ+bG9zdFBvaW50KXttaW5Mb3N0UG9pbnQ9bG9zdFBvaW50O3BhdHRlcm49aTt9fVxucmV0dXJuIHBhdHRlcm47fSxjcmVhdGVNb3ZpZUNsaXA6ZnVuY3Rpb24odGFyZ2V0X21jLGluc3RhbmNlX25hbWUsZGVwdGgpe3ZhciBxcl9tYz10YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSxkZXB0aCk7dmFyIGNzPTE7dGhpcy5tYWtlKCk7Zm9yKHZhciByb3c9MDtyb3c8dGhpcy5tb2R1bGVzLmxlbmd0aDtyb3crKyl7dmFyIHk9cm93KmNzO2Zvcih2YXIgY29sPTA7Y29sPHRoaXMubW9kdWxlc1tyb3ddLmxlbmd0aDtjb2wrKyl7dmFyIHg9Y29sKmNzO3ZhciBkYXJrPXRoaXMubW9kdWxlc1tyb3ddW2NvbF07aWYoZGFyayl7cXJfbWMuYmVnaW5GaWxsKDAsMTAwKTtxcl9tYy5tb3ZlVG8oeCx5KTtxcl9tYy5saW5lVG8oeCtjcyx5KTtxcl9tYy5saW5lVG8oeCtjcyx5K2NzKTtxcl9tYy5saW5lVG8oeCx5K2NzKTtxcl9tYy5lbmRGaWxsKCk7fX19XG5yZXR1cm4gcXJfbWM7fSxzZXR1cFRpbWluZ1BhdHRlcm46ZnVuY3Rpb24oKXtmb3IodmFyIHI9ODtyPHRoaXMubW9kdWxlQ291bnQtODtyKyspe2lmKHRoaXMubW9kdWxlc1tyXVs2XSE9bnVsbCl7Y29udGludWU7fVxudGhpcy5tb2R1bGVzW3JdWzZdPShyJTI9PTApO31cbmZvcih2YXIgYz04O2M8dGhpcy5tb2R1bGVDb3VudC04O2MrKyl7aWYodGhpcy5tb2R1bGVzWzZdW2NdIT1udWxsKXtjb250aW51ZTt9XG50aGlzLm1vZHVsZXNbNl1bY109KGMlMj09MCk7fX0sc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm46ZnVuY3Rpb24oKXt2YXIgcG9zPVFSVXRpbC5nZXRQYXR0ZXJuUG9zaXRpb24odGhpcy50eXBlTnVtYmVyKTtmb3IodmFyIGk9MDtpPHBvcy5sZW5ndGg7aSsrKXtmb3IodmFyIGo9MDtqPHBvcy5sZW5ndGg7aisrKXt2YXIgcm93PXBvc1tpXTt2YXIgY29sPXBvc1tqXTtpZih0aGlzLm1vZHVsZXNbcm93XVtjb2xdIT1udWxsKXtjb250aW51ZTt9XG5mb3IodmFyIHI9LTI7cjw9MjtyKyspe2Zvcih2YXIgYz0tMjtjPD0yO2MrKyl7aWYocj09LTJ8fHI9PTJ8fGM9PS0yfHxjPT0yfHwocj09MCYmYz09MCkpe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWU7fWVsc2V7dGhpcy5tb2R1bGVzW3JvdytyXVtjb2wrY109ZmFsc2U7fX19fX19LHNldHVwVHlwZU51bWJlcjpmdW5jdGlvbih0ZXN0KXt2YXIgYml0cz1RUlV0aWwuZ2V0QkNIVHlwZU51bWJlcih0aGlzLnR5cGVOdW1iZXIpO2Zvcih2YXIgaT0wO2k8MTg7aSsrKXt2YXIgbW9kPSghdGVzdCYmKChiaXRzPj5pKSYxKT09MSk7dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaS8zKV1baSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXT1tb2Q7fVxuZm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTt0aGlzLm1vZHVsZXNbaSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXVtNYXRoLmZsb29yKGkvMyldPW1vZDt9fSxzZXR1cFR5cGVJbmZvOmZ1bmN0aW9uKHRlc3QsbWFza1BhdHRlcm4pe3ZhciBkYXRhPSh0aGlzLmVycm9yQ29ycmVjdExldmVsPDwzKXxtYXNrUGF0dGVybjt2YXIgYml0cz1RUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7Zm9yKHZhciBpPTA7aTwxNTtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTtpZihpPDYpe3RoaXMubW9kdWxlc1tpXVs4XT1tb2Q7fWVsc2UgaWYoaTw4KXt0aGlzLm1vZHVsZXNbaSsxXVs4XT1tb2Q7fWVsc2V7dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtMTUraV1bOF09bW9kO319XG5mb3IodmFyIGk9MDtpPDE1O2krKyl7dmFyIG1vZD0oIXRlc3QmJigoYml0cz4+aSkmMSk9PTEpO2lmKGk8OCl7dGhpcy5tb2R1bGVzWzhdW3RoaXMubW9kdWxlQ291bnQtaS0xXT1tb2Q7fWVsc2UgaWYoaTw5KXt0aGlzLm1vZHVsZXNbOF1bMTUtaS0xKzFdPW1vZDt9ZWxzZXt0aGlzLm1vZHVsZXNbOF1bMTUtaS0xXT1tb2Q7fX1cbnRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50LThdWzhdPSghdGVzdCk7fSxtYXBEYXRhOmZ1bmN0aW9uKGRhdGEsbWFza1BhdHRlcm4pe3ZhciBpbmM9LTE7dmFyIHJvdz10aGlzLm1vZHVsZUNvdW50LTE7dmFyIGJpdEluZGV4PTc7dmFyIGJ5dGVJbmRleD0wO2Zvcih2YXIgY29sPXRoaXMubW9kdWxlQ291bnQtMTtjb2w+MDtjb2wtPTIpe2lmKGNvbD09Niljb2wtLTt3aGlsZSh0cnVlKXtmb3IodmFyIGM9MDtjPDI7YysrKXtpZih0aGlzLm1vZHVsZXNbcm93XVtjb2wtY109PW51bGwpe3ZhciBkYXJrPWZhbHNlO2lmKGJ5dGVJbmRleDxkYXRhLmxlbmd0aCl7ZGFyaz0oKChkYXRhW2J5dGVJbmRleF0+Pj5iaXRJbmRleCkmMSk9PTEpO31cbnZhciBtYXNrPVFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLHJvdyxjb2wtYyk7aWYobWFzayl7ZGFyaz0hZGFyazt9XG50aGlzLm1vZHVsZXNbcm93XVtjb2wtY109ZGFyaztiaXRJbmRleC0tO2lmKGJpdEluZGV4PT0tMSl7Ynl0ZUluZGV4Kys7Yml0SW5kZXg9Nzt9fX1cbnJvdys9aW5jO2lmKHJvdzwwfHx0aGlzLm1vZHVsZUNvdW50PD1yb3cpe3Jvdy09aW5jO2luYz0taW5jO2JyZWFrO319fX19O1FSQ29kZU1vZGVsLlBBRDA9MHhFQztRUkNvZGVNb2RlbC5QQUQxPTB4MTE7UVJDb2RlTW9kZWwuY3JlYXRlRGF0YT1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsLGRhdGFMaXN0KXt2YXIgcnNCbG9ja3M9UVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO3ZhciBidWZmZXI9bmV3IFFSQml0QnVmZmVyKCk7Zm9yKHZhciBpPTA7aTxkYXRhTGlzdC5sZW5ndGg7aSsrKXt2YXIgZGF0YT1kYXRhTGlzdFtpXTtidWZmZXIucHV0KGRhdGEubW9kZSw0KTtidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsdHlwZU51bWJlcikpO2RhdGEud3JpdGUoYnVmZmVyKTt9XG52YXIgdG90YWxEYXRhQ291bnQ9MDtmb3IodmFyIGk9MDtpPHJzQmxvY2tzLmxlbmd0aDtpKyspe3RvdGFsRGF0YUNvdW50Kz1yc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7fVxuaWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpPnRvdGFsRGF0YUNvdW50Kjgpe3Rocm93IG5ldyBFcnJvcihcImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoXCJcbitidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKClcbitcIj5cIlxuK3RvdGFsRGF0YUNvdW50KjhcbitcIilcIik7fVxuaWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpKzQ8PXRvdGFsRGF0YUNvdW50Kjgpe2J1ZmZlci5wdXQoMCw0KTt9XG53aGlsZShidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCklOCE9MCl7YnVmZmVyLnB1dEJpdChmYWxzZSk7fVxud2hpbGUodHJ1ZSl7aWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpPj10b3RhbERhdGFDb3VudCo4KXticmVhazt9XG5idWZmZXIucHV0KFFSQ29kZU1vZGVsLlBBRDAsOCk7aWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpPj10b3RhbERhdGFDb3VudCo4KXticmVhazt9XG5idWZmZXIucHV0KFFSQ29kZU1vZGVsLlBBRDEsOCk7fVxucmV0dXJuIFFSQ29kZU1vZGVsLmNyZWF0ZUJ5dGVzKGJ1ZmZlcixyc0Jsb2Nrcyk7fTtRUkNvZGVNb2RlbC5jcmVhdGVCeXRlcz1mdW5jdGlvbihidWZmZXIscnNCbG9ja3Mpe3ZhciBvZmZzZXQ9MDt2YXIgbWF4RGNDb3VudD0wO3ZhciBtYXhFY0NvdW50PTA7dmFyIGRjZGF0YT1uZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTt2YXIgZWNkYXRhPW5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7dmFyIGRjQ291bnQ9cnNCbG9ja3Nbcl0uZGF0YUNvdW50O3ZhciBlY0NvdW50PXJzQmxvY2tzW3JdLnRvdGFsQ291bnQtZGNDb3VudDttYXhEY0NvdW50PU1hdGgubWF4KG1heERjQ291bnQsZGNDb3VudCk7bWF4RWNDb3VudD1NYXRoLm1heChtYXhFY0NvdW50LGVjQ291bnQpO2RjZGF0YVtyXT1uZXcgQXJyYXkoZGNDb3VudCk7Zm9yKHZhciBpPTA7aTxkY2RhdGFbcl0ubGVuZ3RoO2krKyl7ZGNkYXRhW3JdW2ldPTB4ZmYmYnVmZmVyLmJ1ZmZlcltpK29mZnNldF07fVxub2Zmc2V0Kz1kY0NvdW50O3ZhciByc1BvbHk9UVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7dmFyIHJhd1BvbHk9bmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0scnNQb2x5LmdldExlbmd0aCgpLTEpO3ZhciBtb2RQb2x5PXJhd1BvbHkubW9kKHJzUG9seSk7ZWNkYXRhW3JdPW5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTxlY2RhdGFbcl0ubGVuZ3RoO2krKyl7dmFyIG1vZEluZGV4PWkrbW9kUG9seS5nZXRMZW5ndGgoKS1lY2RhdGFbcl0ubGVuZ3RoO2VjZGF0YVtyXVtpXT0obW9kSW5kZXg+PTApP21vZFBvbHkuZ2V0KG1vZEluZGV4KTowO319XG52YXIgdG90YWxDb2RlQ291bnQ9MDtmb3IodmFyIGk9MDtpPHJzQmxvY2tzLmxlbmd0aDtpKyspe3RvdGFsQ29kZUNvdW50Kz1yc0Jsb2Nrc1tpXS50b3RhbENvdW50O31cbnZhciBkYXRhPW5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7dmFyIGluZGV4PTA7Zm9yKHZhciBpPTA7aTxtYXhEY0NvdW50O2krKyl7Zm9yKHZhciByPTA7cjxyc0Jsb2Nrcy5sZW5ndGg7cisrKXtpZihpPGRjZGF0YVtyXS5sZW5ndGgpe2RhdGFbaW5kZXgrK109ZGNkYXRhW3JdW2ldO319fVxuZm9yKHZhciBpPTA7aTxtYXhFY0NvdW50O2krKyl7Zm9yKHZhciByPTA7cjxyc0Jsb2Nrcy5sZW5ndGg7cisrKXtpZihpPGVjZGF0YVtyXS5sZW5ndGgpe2RhdGFbaW5kZXgrK109ZWNkYXRhW3JdW2ldO319fVxucmV0dXJuIGRhdGE7fTt2YXIgUVJNb2RlPXtNT0RFX05VTUJFUjoxPDwwLE1PREVfQUxQSEFfTlVNOjE8PDEsTU9ERV84QklUX0JZVEU6MTw8MixNT0RFX0tBTkpJOjE8PDN9O3ZhciBRUkVycm9yQ29ycmVjdExldmVsPXtMOjEsTTowLFE6MyxIOjJ9O3ZhciBRUk1hc2tQYXR0ZXJuPXtQQVRURVJOMDAwOjAsUEFUVEVSTjAwMToxLFBBVFRFUk4wMTA6MixQQVRURVJOMDExOjMsUEFUVEVSTjEwMDo0LFBBVFRFUk4xMDE6NSxQQVRURVJOMTEwOjYsUEFUVEVSTjExMTo3fTt2YXIgUVJVdGlsPXtQQVRURVJOX1BPU0lUSU9OX1RBQkxFOltbXSxbNiwxOF0sWzYsMjJdLFs2LDI2XSxbNiwzMF0sWzYsMzRdLFs2LDIyLDM4XSxbNiwyNCw0Ml0sWzYsMjYsNDZdLFs2LDI4LDUwXSxbNiwzMCw1NF0sWzYsMzIsNThdLFs2LDM0LDYyXSxbNiwyNiw0Niw2Nl0sWzYsMjYsNDgsNzBdLFs2LDI2LDUwLDc0XSxbNiwzMCw1NCw3OF0sWzYsMzAsNTYsODJdLFs2LDMwLDU4LDg2XSxbNiwzNCw2Miw5MF0sWzYsMjgsNTAsNzIsOTRdLFs2LDI2LDUwLDc0LDk4XSxbNiwzMCw1NCw3OCwxMDJdLFs2LDI4LDU0LDgwLDEwNl0sWzYsMzIsNTgsODQsMTEwXSxbNiwzMCw1OCw4NiwxMTRdLFs2LDM0LDYyLDkwLDExOF0sWzYsMjYsNTAsNzQsOTgsMTIyXSxbNiwzMCw1NCw3OCwxMDIsMTI2XSxbNiwyNiw1Miw3OCwxMDQsMTMwXSxbNiwzMCw1Niw4MiwxMDgsMTM0XSxbNiwzNCw2MCw4NiwxMTIsMTM4XSxbNiwzMCw1OCw4NiwxMTQsMTQyXSxbNiwzNCw2Miw5MCwxMTgsMTQ2XSxbNiwzMCw1NCw3OCwxMDIsMTI2LDE1MF0sWzYsMjQsNTAsNzYsMTAyLDEyOCwxNTRdLFs2LDI4LDU0LDgwLDEwNiwxMzIsMTU4XSxbNiwzMiw1OCw4NCwxMTAsMTM2LDE2Ml0sWzYsMjYsNTQsODIsMTEwLDEzOCwxNjZdLFs2LDMwLDU4LDg2LDExNCwxNDIsMTcwXV0sRzE1OigxPDwxMCl8KDE8PDgpfCgxPDw1KXwoMTw8NCl8KDE8PDIpfCgxPDwxKXwoMTw8MCksRzE4OigxPDwxMil8KDE8PDExKXwoMTw8MTApfCgxPDw5KXwoMTw8OCl8KDE8PDUpfCgxPDwyKXwoMTw8MCksRzE1X01BU0s6KDE8PDE0KXwoMTw8MTIpfCgxPDwxMCl8KDE8PDQpfCgxPDwxKSxnZXRCQ0hUeXBlSW5mbzpmdW5jdGlvbihkYXRhKXt2YXIgZD1kYXRhPDwxMDt3aGlsZShRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpPj0wKXtkXj0oUVJVdGlsLkcxNTw8KFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkpKTt9XG5yZXR1cm4oKGRhdGE8PDEwKXxkKV5RUlV0aWwuRzE1X01BU0s7fSxnZXRCQ0hUeXBlTnVtYmVyOmZ1bmN0aW9uKGRhdGEpe3ZhciBkPWRhdGE8PDEyO3doaWxlKFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxOCk+PTApe2RePShRUlV0aWwuRzE4PDwoUVJVdGlsLmdldEJDSERpZ2l0KGQpLVFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSkpO31cbnJldHVybihkYXRhPDwxMil8ZDt9LGdldEJDSERpZ2l0OmZ1bmN0aW9uKGRhdGEpe3ZhciBkaWdpdD0wO3doaWxlKGRhdGEhPTApe2RpZ2l0Kys7ZGF0YT4+Pj0xO31cbnJldHVybiBkaWdpdDt9LGdldFBhdHRlcm5Qb3NpdGlvbjpmdW5jdGlvbih0eXBlTnVtYmVyKXtyZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlci0xXTt9LGdldE1hc2s6ZnVuY3Rpb24obWFza1BhdHRlcm4saSxqKXtzd2l0Y2gobWFza1BhdHRlcm4pe2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAwOnJldHVybihpK2opJTI9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDE6cmV0dXJuIGklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMDpyZXR1cm4gaiUzPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDExOnJldHVybihpK2opJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDA6cmV0dXJuKE1hdGguZmxvb3IoaS8yKStNYXRoLmZsb29yKGovMykpJTI9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6cmV0dXJuKGkqaiklMisoaSpqKSUzPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwOnJldHVybigoaSpqKSUyKyhpKmopJTMpJTI9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTE6cmV0dXJuKChpKmopJTMrKGkraiklMiklMj09MDtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcImJhZCBtYXNrUGF0dGVybjpcIittYXNrUGF0dGVybik7fX0sZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbDpmdW5jdGlvbihlcnJvckNvcnJlY3RMZW5ndGgpe3ZhciBhPW5ldyBRUlBvbHlub21pYWwoWzFdLDApO2Zvcih2YXIgaT0wO2k8ZXJyb3JDb3JyZWN0TGVuZ3RoO2krKyl7YT1hLm11bHRpcGx5KG5ldyBRUlBvbHlub21pYWwoWzEsUVJNYXRoLmdleHAoaSldLDApKTt9XG5yZXR1cm4gYTt9LGdldExlbmd0aEluQml0czpmdW5jdGlvbihtb2RlLHR5cGUpe2lmKDE8PXR5cGUmJnR5cGU8MTApe3N3aXRjaChtb2RlKXtjYXNlIFFSTW9kZS5NT0RFX05VTUJFUjpyZXR1cm4gMTA7Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06cmV0dXJuIDk7Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6cmV0dXJuIDg7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gODtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIrbW9kZSk7fX1lbHNlIGlmKHR5cGU8Mjcpe3N3aXRjaChtb2RlKXtjYXNlIFFSTW9kZS5NT0RFX05VTUJFUjpyZXR1cm4gMTI7Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06cmV0dXJuIDExO2Nhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOnJldHVybiAxNjtjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOnJldHVybiAxMDtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIrbW9kZSk7fX1lbHNlIGlmKHR5cGU8NDEpe3N3aXRjaChtb2RlKXtjYXNlIFFSTW9kZS5NT0RFX05VTUJFUjpyZXR1cm4gMTQ7Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06cmV0dXJuIDEzO2Nhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOnJldHVybiAxNjtjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOnJldHVybiAxMjtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIrbW9kZSk7fX1lbHNle3Rocm93IG5ldyBFcnJvcihcInR5cGU6XCIrdHlwZSk7fX0sZ2V0TG9zdFBvaW50OmZ1bmN0aW9uKHFyQ29kZSl7dmFyIG1vZHVsZUNvdW50PXFyQ29kZS5nZXRNb2R1bGVDb3VudCgpO3ZhciBsb3N0UG9pbnQ9MDtmb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQ7Y29sKyspe3ZhciBzYW1lQ291bnQ9MDt2YXIgZGFyaz1xckNvZGUuaXNEYXJrKHJvdyxjb2wpO2Zvcih2YXIgcj0tMTtyPD0xO3IrKyl7aWYocm93K3I8MHx8bW9kdWxlQ291bnQ8PXJvdytyKXtjb250aW51ZTt9XG5mb3IodmFyIGM9LTE7Yzw9MTtjKyspe2lmKGNvbCtjPDB8fG1vZHVsZUNvdW50PD1jb2wrYyl7Y29udGludWU7fVxuaWYocj09MCYmYz09MCl7Y29udGludWU7fVxuaWYoZGFyaz09cXJDb2RlLmlzRGFyayhyb3crcixjb2wrYykpe3NhbWVDb3VudCsrO319fVxuaWYoc2FtZUNvdW50PjUpe2xvc3RQb2ludCs9KDMrc2FtZUNvdW50LTUpO319fVxuZm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQtMTtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQtMTtjb2wrKyl7dmFyIGNvdW50PTA7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSljb3VudCsrO2lmKHFyQ29kZS5pc0Rhcmsocm93KzEsY29sKSljb3VudCsrO2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCsxKSljb3VudCsrO2lmKHFyQ29kZS5pc0Rhcmsocm93KzEsY29sKzEpKWNvdW50Kys7aWYoY291bnQ9PTB8fGNvdW50PT00KXtsb3N0UG9pbnQrPTM7fX19XG5mb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQtNjtjb2wrKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSYmIXFyQ29kZS5pc0Rhcmsocm93LGNvbCsxKSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzIpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrMykmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCs0KSYmIXFyQ29kZS5pc0Rhcmsocm93LGNvbCs1KSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzYpKXtsb3N0UG9pbnQrPTQwO319fVxuZm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQ7Y29sKyspe2Zvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50LTY7cm93Kyspe2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdysxLGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzIsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crMyxjb2wpJiZxckNvZGUuaXNEYXJrKHJvdys0LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdys1LGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzYsY29sKSl7bG9zdFBvaW50Kz00MDt9fX1cbnZhciBkYXJrQ291bnQ9MDtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudDtjb2wrKyl7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQ7cm93Kyspe2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkpe2RhcmtDb3VudCsrO319fVxudmFyIHJhdGlvPU1hdGguYWJzKDEwMCpkYXJrQ291bnQvbW9kdWxlQ291bnQvbW9kdWxlQ291bnQtNTApLzU7bG9zdFBvaW50Kz1yYXRpbyoxMDtyZXR1cm4gbG9zdFBvaW50O319O3ZhciBRUk1hdGg9e2dsb2c6ZnVuY3Rpb24obil7aWYobjwxKXt0aHJvdyBuZXcgRXJyb3IoXCJnbG9nKFwiK24rXCIpXCIpO31cbnJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO30sZ2V4cDpmdW5jdGlvbihuKXt3aGlsZShuPDApe24rPTI1NTt9XG53aGlsZShuPj0yNTYpe24tPTI1NTt9XG5yZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTt9LEVYUF9UQUJMRTpuZXcgQXJyYXkoMjU2KSxMT0dfVEFCTEU6bmV3IEFycmF5KDI1Nil9O2Zvcih2YXIgaT0wO2k8ODtpKyspe1FSTWF0aC5FWFBfVEFCTEVbaV09MTw8aTt9XG5mb3IodmFyIGk9ODtpPDI1NjtpKyspe1FSTWF0aC5FWFBfVEFCTEVbaV09UVJNYXRoLkVYUF9UQUJMRVtpLTRdXlFSTWF0aC5FWFBfVEFCTEVbaS01XV5RUk1hdGguRVhQX1RBQkxFW2ktNl1eUVJNYXRoLkVYUF9UQUJMRVtpLThdO31cbmZvcih2YXIgaT0wO2k8MjU1O2krKyl7UVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldXT1pO31cbmZ1bmN0aW9uIFFSUG9seW5vbWlhbChudW0sc2hpZnQpe2lmKG51bS5sZW5ndGg9PXVuZGVmaW5lZCl7dGhyb3cgbmV3IEVycm9yKG51bS5sZW5ndGgrXCIvXCIrc2hpZnQpO31cbnZhciBvZmZzZXQ9MDt3aGlsZShvZmZzZXQ8bnVtLmxlbmd0aCYmbnVtW29mZnNldF09PTApe29mZnNldCsrO31cbnRoaXMubnVtPW5ldyBBcnJheShudW0ubGVuZ3RoLW9mZnNldCtzaGlmdCk7Zm9yKHZhciBpPTA7aTxudW0ubGVuZ3RoLW9mZnNldDtpKyspe3RoaXMubnVtW2ldPW51bVtpK29mZnNldF07fX1cblFSUG9seW5vbWlhbC5wcm90b3R5cGU9e2dldDpmdW5jdGlvbihpbmRleCl7cmV0dXJuIHRoaXMubnVtW2luZGV4XTt9LGdldExlbmd0aDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm51bS5sZW5ndGg7fSxtdWx0aXBseTpmdW5jdGlvbihlKXt2YXIgbnVtPW5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpK2UuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7Zm9yKHZhciBqPTA7ajxlLmdldExlbmd0aCgpO2orKyl7bnVtW2kral1ePVFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKStRUk1hdGguZ2xvZyhlLmdldChqKSkpO319XG5yZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCk7fSxtb2Q6ZnVuY3Rpb24oZSl7aWYodGhpcy5nZXRMZW5ndGgoKS1lLmdldExlbmd0aCgpPDApe3JldHVybiB0aGlzO31cbnZhciByYXRpbz1RUk1hdGguZ2xvZyh0aGlzLmdldCgwKSktUVJNYXRoLmdsb2coZS5nZXQoMCkpO3ZhciBudW09bmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkpO2Zvcih2YXIgaT0wO2k8dGhpcy5nZXRMZW5ndGgoKTtpKyspe251bVtpXT10aGlzLmdldChpKTt9XG5mb3IodmFyIGk9MDtpPGUuZ2V0TGVuZ3RoKCk7aSsrKXtudW1baV1ePVFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKGUuZ2V0KGkpKStyYXRpbyk7fVxucmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLDApLm1vZChlKTt9fTtmdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCxkYXRhQ291bnQpe3RoaXMudG90YWxDb3VudD10b3RhbENvdW50O3RoaXMuZGF0YUNvdW50PWRhdGFDb3VudDt9XG5RUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEU9W1sxLDI2LDE5XSxbMSwyNiwxNl0sWzEsMjYsMTNdLFsxLDI2LDldLFsxLDQ0LDM0XSxbMSw0NCwyOF0sWzEsNDQsMjJdLFsxLDQ0LDE2XSxbMSw3MCw1NV0sWzEsNzAsNDRdLFsyLDM1LDE3XSxbMiwzNSwxM10sWzEsMTAwLDgwXSxbMiw1MCwzMl0sWzIsNTAsMjRdLFs0LDI1LDldLFsxLDEzNCwxMDhdLFsyLDY3LDQzXSxbMiwzMywxNSwyLDM0LDE2XSxbMiwzMywxMSwyLDM0LDEyXSxbMiw4Niw2OF0sWzQsNDMsMjddLFs0LDQzLDE5XSxbNCw0MywxNV0sWzIsOTgsNzhdLFs0LDQ5LDMxXSxbMiwzMiwxNCw0LDMzLDE1XSxbNCwzOSwxMywxLDQwLDE0XSxbMiwxMjEsOTddLFsyLDYwLDM4LDIsNjEsMzldLFs0LDQwLDE4LDIsNDEsMTldLFs0LDQwLDE0LDIsNDEsMTVdLFsyLDE0NiwxMTZdLFszLDU4LDM2LDIsNTksMzddLFs0LDM2LDE2LDQsMzcsMTddLFs0LDM2LDEyLDQsMzcsMTNdLFsyLDg2LDY4LDIsODcsNjldLFs0LDY5LDQzLDEsNzAsNDRdLFs2LDQzLDE5LDIsNDQsMjBdLFs2LDQzLDE1LDIsNDQsMTZdLFs0LDEwMSw4MV0sWzEsODAsNTAsNCw4MSw1MV0sWzQsNTAsMjIsNCw1MSwyM10sWzMsMzYsMTIsOCwzNywxM10sWzIsMTE2LDkyLDIsMTE3LDkzXSxbNiw1OCwzNiwyLDU5LDM3XSxbNCw0NiwyMCw2LDQ3LDIxXSxbNyw0MiwxNCw0LDQzLDE1XSxbNCwxMzMsMTA3XSxbOCw1OSwzNywxLDYwLDM4XSxbOCw0NCwyMCw0LDQ1LDIxXSxbMTIsMzMsMTEsNCwzNCwxMl0sWzMsMTQ1LDExNSwxLDE0NiwxMTZdLFs0LDY0LDQwLDUsNjUsNDFdLFsxMSwzNiwxNiw1LDM3LDE3XSxbMTEsMzYsMTIsNSwzNywxM10sWzUsMTA5LDg3LDEsMTEwLDg4XSxbNSw2NSw0MSw1LDY2LDQyXSxbNSw1NCwyNCw3LDU1LDI1XSxbMTEsMzYsMTJdLFs1LDEyMiw5OCwxLDEyMyw5OV0sWzcsNzMsNDUsMyw3NCw0Nl0sWzE1LDQzLDE5LDIsNDQsMjBdLFszLDQ1LDE1LDEzLDQ2LDE2XSxbMSwxMzUsMTA3LDUsMTM2LDEwOF0sWzEwLDc0LDQ2LDEsNzUsNDddLFsxLDUwLDIyLDE1LDUxLDIzXSxbMiw0MiwxNCwxNyw0MywxNV0sWzUsMTUwLDEyMCwxLDE1MSwxMjFdLFs5LDY5LDQzLDQsNzAsNDRdLFsxNyw1MCwyMiwxLDUxLDIzXSxbMiw0MiwxNCwxOSw0MywxNV0sWzMsMTQxLDExMyw0LDE0MiwxMTRdLFszLDcwLDQ0LDExLDcxLDQ1XSxbMTcsNDcsMjEsNCw0OCwyMl0sWzksMzksMTMsMTYsNDAsMTRdLFszLDEzNSwxMDcsNSwxMzYsMTA4XSxbMyw2Nyw0MSwxMyw2OCw0Ml0sWzE1LDU0LDI0LDUsNTUsMjVdLFsxNSw0MywxNSwxMCw0NCwxNl0sWzQsMTQ0LDExNiw0LDE0NSwxMTddLFsxNyw2OCw0Ml0sWzE3LDUwLDIyLDYsNTEsMjNdLFsxOSw0NiwxNiw2LDQ3LDE3XSxbMiwxMzksMTExLDcsMTQwLDExMl0sWzE3LDc0LDQ2XSxbNyw1NCwyNCwxNiw1NSwyNV0sWzM0LDM3LDEzXSxbNCwxNTEsMTIxLDUsMTUyLDEyMl0sWzQsNzUsNDcsMTQsNzYsNDhdLFsxMSw1NCwyNCwxNCw1NSwyNV0sWzE2LDQ1LDE1LDE0LDQ2LDE2XSxbNiwxNDcsMTE3LDQsMTQ4LDExOF0sWzYsNzMsNDUsMTQsNzQsNDZdLFsxMSw1NCwyNCwxNiw1NSwyNV0sWzMwLDQ2LDE2LDIsNDcsMTddLFs4LDEzMiwxMDYsNCwxMzMsMTA3XSxbOCw3NSw0NywxMyw3Niw0OF0sWzcsNTQsMjQsMjIsNTUsMjVdLFsyMiw0NSwxNSwxMyw0NiwxNl0sWzEwLDE0MiwxMTQsMiwxNDMsMTE1XSxbMTksNzQsNDYsNCw3NSw0N10sWzI4LDUwLDIyLDYsNTEsMjNdLFszMyw0NiwxNiw0LDQ3LDE3XSxbOCwxNTIsMTIyLDQsMTUzLDEyM10sWzIyLDczLDQ1LDMsNzQsNDZdLFs4LDUzLDIzLDI2LDU0LDI0XSxbMTIsNDUsMTUsMjgsNDYsMTZdLFszLDE0NywxMTcsMTAsMTQ4LDExOF0sWzMsNzMsNDUsMjMsNzQsNDZdLFs0LDU0LDI0LDMxLDU1LDI1XSxbMTEsNDUsMTUsMzEsNDYsMTZdLFs3LDE0NiwxMTYsNywxNDcsMTE3XSxbMjEsNzMsNDUsNyw3NCw0Nl0sWzEsNTMsMjMsMzcsNTQsMjRdLFsxOSw0NSwxNSwyNiw0NiwxNl0sWzUsMTQ1LDExNSwxMCwxNDYsMTE2XSxbMTksNzUsNDcsMTAsNzYsNDhdLFsxNSw1NCwyNCwyNSw1NSwyNV0sWzIzLDQ1LDE1LDI1LDQ2LDE2XSxbMTMsMTQ1LDExNSwzLDE0NiwxMTZdLFsyLDc0LDQ2LDI5LDc1LDQ3XSxbNDIsNTQsMjQsMSw1NSwyNV0sWzIzLDQ1LDE1LDI4LDQ2LDE2XSxbMTcsMTQ1LDExNV0sWzEwLDc0LDQ2LDIzLDc1LDQ3XSxbMTAsNTQsMjQsMzUsNTUsMjVdLFsxOSw0NSwxNSwzNSw0NiwxNl0sWzE3LDE0NSwxMTUsMSwxNDYsMTE2XSxbMTQsNzQsNDYsMjEsNzUsNDddLFsyOSw1NCwyNCwxOSw1NSwyNV0sWzExLDQ1LDE1LDQ2LDQ2LDE2XSxbMTMsMTQ1LDExNSw2LDE0NiwxMTZdLFsxNCw3NCw0NiwyMyw3NSw0N10sWzQ0LDU0LDI0LDcsNTUsMjVdLFs1OSw0NiwxNiwxLDQ3LDE3XSxbMTIsMTUxLDEyMSw3LDE1MiwxMjJdLFsxMiw3NSw0NywyNiw3Niw0OF0sWzM5LDU0LDI0LDE0LDU1LDI1XSxbMjIsNDUsMTUsNDEsNDYsMTZdLFs2LDE1MSwxMjEsMTQsMTUyLDEyMl0sWzYsNzUsNDcsMzQsNzYsNDhdLFs0Niw1NCwyNCwxMCw1NSwyNV0sWzIsNDUsMTUsNjQsNDYsMTZdLFsxNywxNTIsMTIyLDQsMTUzLDEyM10sWzI5LDc0LDQ2LDE0LDc1LDQ3XSxbNDksNTQsMjQsMTAsNTUsMjVdLFsyNCw0NSwxNSw0Niw0NiwxNl0sWzQsMTUyLDEyMiwxOCwxNTMsMTIzXSxbMTMsNzQsNDYsMzIsNzUsNDddLFs0OCw1NCwyNCwxNCw1NSwyNV0sWzQyLDQ1LDE1LDMyLDQ2LDE2XSxbMjAsMTQ3LDExNyw0LDE0OCwxMThdLFs0MCw3NSw0Nyw3LDc2LDQ4XSxbNDMsNTQsMjQsMjIsNTUsMjVdLFsxMCw0NSwxNSw2Nyw0NiwxNl0sWzE5LDE0OCwxMTgsNiwxNDksMTE5XSxbMTgsNzUsNDcsMzEsNzYsNDhdLFszNCw1NCwyNCwzNCw1NSwyNV0sWzIwLDQ1LDE1LDYxLDQ2LDE2XV07UVJSU0Jsb2NrLmdldFJTQmxvY2tzPWZ1bmN0aW9uKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpe3ZhciByc0Jsb2NrPVFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCk7aWYocnNCbG9jaz09dW5kZWZpbmVkKXt0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOlwiK3R5cGVOdW1iZXIrXCIvZXJyb3JDb3JyZWN0TGV2ZWw6XCIrZXJyb3JDb3JyZWN0TGV2ZWwpO31cbnZhciBsZW5ndGg9cnNCbG9jay5sZW5ndGgvMzt2YXIgbGlzdD1bXTtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3ZhciBjb3VudD1yc0Jsb2NrW2kqMyswXTt2YXIgdG90YWxDb3VudD1yc0Jsb2NrW2kqMysxXTt2YXIgZGF0YUNvdW50PXJzQmxvY2tbaSozKzJdO2Zvcih2YXIgaj0wO2o8Y291bnQ7aisrKXtsaXN0LnB1c2gobmV3IFFSUlNCbG9jayh0b3RhbENvdW50LGRhdGFDb3VudCkpO319XG5yZXR1cm4gbGlzdDt9O1FSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGU9ZnVuY3Rpb24odHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCl7c3dpdGNoKGVycm9yQ29ycmVjdExldmVsKXtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrMF07Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlci0xKSo0KzFdO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5ROnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCsyXTtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrM107ZGVmYXVsdDpyZXR1cm4gdW5kZWZpbmVkO319O2Z1bmN0aW9uIFFSQml0QnVmZmVyKCl7dGhpcy5idWZmZXI9W107dGhpcy5sZW5ndGg9MDt9XG5RUkJpdEJ1ZmZlci5wcm90b3R5cGU9e2dldDpmdW5jdGlvbihpbmRleCl7dmFyIGJ1ZkluZGV4PU1hdGguZmxvb3IoaW5kZXgvOCk7cmV0dXJuKCh0aGlzLmJ1ZmZlcltidWZJbmRleF0+Pj4oNy1pbmRleCU4KSkmMSk9PTE7fSxwdXQ6ZnVuY3Rpb24obnVtLGxlbmd0aCl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXt0aGlzLnB1dEJpdCgoKG51bT4+PihsZW5ndGgtaS0xKSkmMSk9PTEpO319LGdldExlbmd0aEluQml0czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aDt9LHB1dEJpdDpmdW5jdGlvbihiaXQpe3ZhciBidWZJbmRleD1NYXRoLmZsb29yKHRoaXMubGVuZ3RoLzgpO2lmKHRoaXMuYnVmZmVyLmxlbmd0aDw9YnVmSW5kZXgpe3RoaXMuYnVmZmVyLnB1c2goMCk7fVxuaWYoYml0KXt0aGlzLmJ1ZmZlcltidWZJbmRleF18PSgweDgwPj4+KHRoaXMubGVuZ3RoJTgpKTt9XG50aGlzLmxlbmd0aCsrO319O3ZhciBRUkNvZGVMaW1pdExlbmd0aD1bWzE3LDE0LDExLDddLFszMiwyNiwyMCwxNF0sWzUzLDQyLDMyLDI0XSxbNzgsNjIsNDYsMzRdLFsxMDYsODQsNjAsNDRdLFsxMzQsMTA2LDc0LDU4XSxbMTU0LDEyMiw4Niw2NF0sWzE5MiwxNTIsMTA4LDg0XSxbMjMwLDE4MCwxMzAsOThdLFsyNzEsMjEzLDE1MSwxMTldLFszMjEsMjUxLDE3NywxMzddLFszNjcsMjg3LDIwMywxNTVdLFs0MjUsMzMxLDI0MSwxNzddLFs0NTgsMzYyLDI1OCwxOTRdLFs1MjAsNDEyLDI5MiwyMjBdLFs1ODYsNDUwLDMyMiwyNTBdLFs2NDQsNTA0LDM2NCwyODBdLFs3MTgsNTYwLDM5NCwzMTBdLFs3OTIsNjI0LDQ0MiwzMzhdLFs4NTgsNjY2LDQ4MiwzODJdLFs5MjksNzExLDUwOSw0MDNdLFsxMDAzLDc3OSw1NjUsNDM5XSxbMTA5MSw4NTcsNjExLDQ2MV0sWzExNzEsOTExLDY2MSw1MTFdLFsxMjczLDk5Nyw3MTUsNTM1XSxbMTM2NywxMDU5LDc1MSw1OTNdLFsxNDY1LDExMjUsODA1LDYyNV0sWzE1MjgsMTE5MCw4NjgsNjU4XSxbMTYyOCwxMjY0LDkwOCw2OThdLFsxNzMyLDEzNzAsOTgyLDc0Ml0sWzE4NDAsMTQ1MiwxMDMwLDc5MF0sWzE5NTIsMTUzOCwxMTEyLDg0Ml0sWzIwNjgsMTYyOCwxMTY4LDg5OF0sWzIxODgsMTcyMiwxMjI4LDk1OF0sWzIzMDMsMTgwOSwxMjgzLDk4M10sWzI0MzEsMTkxMSwxMzUxLDEwNTFdLFsyNTYzLDE5ODksMTQyMywxMDkzXSxbMjY5OSwyMDk5LDE0OTksMTEzOV0sWzI4MDksMjIxMywxNTc5LDEyMTldLFsyOTUzLDIzMzEsMTY2MywxMjczXV07XG5cblxuLyoqIENvbnN0cnVjdG9yICovXG5mdW5jdGlvbiBRUkNvZGUob3B0aW9ucykge1xuICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICBcbiAgLy9EZWZhdWx0IG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHBhZGRpbmc6IDQsXG4gICAgd2lkdGg6IDI1NiwgXG4gICAgaGVpZ2h0OiAyNTYsXG4gICAgdHlwZU51bWJlcjogNCxcbiAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gICAgZWNsOiBcIk1cIlxuICB9O1xuICBcbiAgLy9JbiBjYXNlIHRoZSBvcHRpb25zIGlzIHN0cmluZ1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNvbnRlbnQ6IG9wdGlvbnNcbiAgICB9O1xuICB9XG4gIFxuICAvL01lcmdlIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgfVxuICB9XG4gIFxuICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkICdjb250ZW50JyBhcyBzdHJpbmchXCIpO1xuICB9XG4gIFxuICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnQubGVuZ3RoID09PSAwIC8qIHx8IHRoaXMub3B0aW9ucy5jb250ZW50Lmxlbmd0aCA+IDcwODkgKi8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCAnY29udGVudCcgdG8gYmUgbm9uLWVtcHR5IVwiKTtcbiAgfVxuICBcbiAgaWYgKCEodGhpcy5vcHRpb25zLnBhZGRpbmcgPj0gMCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCAncGFkZGluZycgdmFsdWUgdG8gYmUgbm9uLW5lZ2F0aXZlIVwiKTtcbiAgfVxuICBcbiAgaWYgKCEodGhpcy5vcHRpb25zLndpZHRoID4gMCkgfHwgISh0aGlzLm9wdGlvbnMuaGVpZ2h0ID4gMCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCAnd2lkdGgnIG9yICdoZWlnaHQnIHZhbHVlIHRvIGJlIGhpZ2hlciB0aGFuIHplcm8hXCIpO1xuICB9XG4gIFxuICAvL0dldHMgdGhlIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAgZnVuY3Rpb24gX2dldEVycm9yQ29ycmVjdExldmVsKGVjbCkge1xuICAgIHN3aXRjaCAoZWNsKSB7XG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgcmV0dXJuIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDtcbiAgICAgICAgICBcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICByZXR1cm4gUVJFcnJvckNvcnJlY3RMZXZlbC5NO1xuICAgICAgICAgIFxuICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgIHJldHVybiBRUkVycm9yQ29ycmVjdExldmVsLlE7XG4gICAgICAgICAgXG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgcmV0dXJuIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDtcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtud29uIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWw6IFwiICsgZWNsKTtcbiAgICAgIH1cbiAgfVxuICBcbiAgLy9HZXQgdHlwZSBudW1iZXJcbiAgZnVuY3Rpb24gX2dldFR5cGVOdW1iZXIoY29udGVudCwgZWNsKSB7ICAgICAgXG4gICAgdmFyIGxlbmd0aCA9IF9nZXRVVEY4TGVuZ3RoKGNvbnRlbnQpO1xuICAgIFxuICAgIHZhciB0eXBlID0gMTtcbiAgICB2YXIgbGltaXQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBRUkNvZGVMaW1pdExlbmd0aC5sZW5ndGg7IGkgPD0gbGVuOyBpKyspIHtcbiAgICAgIHZhciB0YWJsZSA9IFFSQ29kZUxpbWl0TGVuZ3RoW2ldO1xuICAgICAgaWYgKCF0YWJsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb250ZW50IHRvbyBsb25nOiBleHBlY3RlZCBcIiArIGxpbWl0ICsgXCIgYnV0IGdvdCBcIiArIGxlbmd0aCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHN3aXRjaCAoZWNsKSB7XG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgbGltaXQgPSB0YWJsZVswXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICBsaW1pdCA9IHRhYmxlWzFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgIGxpbWl0ID0gdGFibGVbMl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgXG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgbGltaXQgPSB0YWJsZVszXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtud29uIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWw6IFwiICsgZWNsKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHlwZSsrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZSA+IFFSQ29kZUxpbWl0TGVuZ3RoLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29udGVudCB0b28gbG9uZ1wiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICAvL0dldHMgdGV4dCBsZW5ndGhcbiAgZnVuY3Rpb24gX2dldFVURjhMZW5ndGgoY29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSBlbmNvZGVVUkkoY29udGVudCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXCVbMC05YS1mQS1GXXsyfS9nLCAnYScpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoICsgKHJlc3VsdC5sZW5ndGggIT0gY29udGVudCA/IDMgOiAwKTtcbiAgfVxuICBcbiAgLy9HZW5lcmF0ZSBRUiBDb2RlIG1hdHJpeFxuICB2YXIgY29udGVudCA9IHRoaXMub3B0aW9ucy5jb250ZW50O1xuICB2YXIgdHlwZSA9IF9nZXRUeXBlTnVtYmVyKGNvbnRlbnQsIHRoaXMub3B0aW9ucy5lY2wpO1xuICB2YXIgZWNsID0gX2dldEVycm9yQ29ycmVjdExldmVsKHRoaXMub3B0aW9ucy5lY2wpO1xuICB0aGlzLnFyY29kZSA9IG5ldyBRUkNvZGVNb2RlbCh0eXBlLCBlY2wpO1xuICB0aGlzLnFyY29kZS5hZGREYXRhKGNvbnRlbnQpO1xuICB0aGlzLnFyY29kZS5tYWtlKCk7XG59XG5cbi8qKiBHZW5lcmF0ZXMgUVIgQ29kZSBhcyBTVkcgaW1hZ2UgKi9cblFSQ29kZS5wcm90b3R5cGUuc3ZnID0gZnVuY3Rpb24ob3B0KSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHsgfTtcbiAgdmFyIG1vZHVsZXMgPSB0aGlzLnFyY29kZS5tb2R1bGVzO1xuICBcbiAgaWYgKHR5cGVvZiBvcHQgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG9wdCA9IHsgY29udGFpbmVyOiBvcHRpb25zLmNvbnRhaW5lciB8fCBcInN2Z1wiIH07XG4gIH1cbiAgXG4gIC8vQXBwbHkgbmV3IGxpbmVzIGFuZCBpbmRlbnRzIGluIFNWRz9cbiAgdmFyIHByZXR0eSA9IHR5cGVvZiBvcHRpb25zLnByZXR0eSAhPSBcInVuZGVmaW5lZFwiID8gISFvcHRpb25zLnByZXR0eSA6IHRydWU7XG4gIFxuICB2YXIgaW5kZW50ID0gcHJldHR5ID8gJyAgJyA6ICcnO1xuICB2YXIgRU9MID0gcHJldHR5ID8gJ1xcclxcbicgOiAnJztcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICB2YXIgbGVuZ3RoID0gbW9kdWxlcy5sZW5ndGg7XG4gIHZhciB4c2l6ZSA9IHdpZHRoIC8gKGxlbmd0aCArIDIgKiBvcHRpb25zLnBhZGRpbmcpO1xuICB2YXIgeXNpemUgPSBoZWlnaHQgLyAobGVuZ3RoICsgMiAqIG9wdGlvbnMucGFkZGluZyk7XG4gIFxuICAvL0pvaW4gKHVuaW9uLCBtZXJnZSkgcmVjdGFuZ2xlcyBpbnRvIG9uZSBzaGFwZT9cbiAgdmFyIGpvaW4gPSB0eXBlb2Ygb3B0aW9ucy5qb2luICE9IFwidW5kZWZpbmVkXCIgPyAhIW9wdGlvbnMuam9pbiA6IGZhbHNlO1xuICBcbiAgLy9Td2FwIHRoZSBYIGFuZCBZIG1vZHVsZXMsIHB1bGwgcmVxdWVzdCAjMlxuICB2YXIgc3dhcCA9IHR5cGVvZiBvcHRpb25zLnN3YXAgIT0gXCJ1bmRlZmluZWRcIiA/ICEhb3B0aW9ucy5zd2FwIDogZmFsc2U7XG4gIFxuICAvL0FwcGx5IDw/eG1sLi4uPz4gZGVjbGFyYXRpb24gaW4gU1ZHP1xuICB2YXIgeG1sRGVjbGFyYXRpb24gPSB0eXBlb2Ygb3B0aW9ucy54bWxEZWNsYXJhdGlvbiAhPSBcInVuZGVmaW5lZFwiID8gISFvcHRpb25zLnhtbERlY2xhcmF0aW9uIDogdHJ1ZTtcbiAgXG4gIC8vUG9wdWxhdGUgd2l0aCBwcmVkZWZpbmVkIHNoYXBlIGluc3RlYWQgb2YgXCJyZWN0XCIgZWxlbWVudHMsIHRoYW5rcyB0byBAa2tvY2Rrb1xuICB2YXIgcHJlZGVmaW5lZCA9IHR5cGVvZiBvcHRpb25zLnByZWRlZmluZWQgIT0gXCJ1bmRlZmluZWRcIiA/ICEhb3B0aW9ucy5wcmVkZWZpbmVkIDogZmFsc2U7XG4gIHZhciBkZWZzID0gcHJlZGVmaW5lZCA/IGluZGVudCArICc8ZGVmcz48cGF0aCBpZD1cInFybW9kdWxlXCIgZD1cIk0wIDAgaCcgKyB5c2l6ZSArICcgdicgKyB4c2l6ZSArICcgSDAgelwiIHN0eWxlPVwiZmlsbDonICsgb3B0aW9ucy5jb2xvciArICc7c2hhcGUtcmVuZGVyaW5nOmNyaXNwRWRnZXM7XCIgLz48L2RlZnM+JyArIEVPTCA6ICcnO1xuICBcbiAgLy9CYWNrZ3JvdW5kIHJlY3RhbmdsZVxuICB2YXIgYmdyZWN0ID0gaW5kZW50ICsgJzxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICsgJ1wiIHN0eWxlPVwiZmlsbDonICsgb3B0aW9ucy5iYWNrZ3JvdW5kICsgJztzaGFwZS1yZW5kZXJpbmc6Y3Jpc3BFZGdlcztcIi8+JyArIEVPTDtcbiAgXG4gIC8vUmVjdGFuZ2xlcyByZXByZXNlbnRpbmcgbW9kdWxlc1xuICB2YXIgbW9kcmVjdCA9ICcnO1xuICB2YXIgcGF0aGRhdGEgPSAnJztcblxuICBmb3IgKHZhciB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgdmFyIG1vZHVsZSA9IG1vZHVsZXNbeF1beV07XG4gICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHggPSAoeCAqIHhzaXplICsgb3B0aW9ucy5wYWRkaW5nICogeHNpemUpO1xuICAgICAgICB2YXIgcHkgPSAoeSAqIHlzaXplICsgb3B0aW9ucy5wYWRkaW5nICogeXNpemUpO1xuICAgICAgICBcbiAgICAgICAgLy9Tb21lIHVzZXJzIGhhdmUgaGFkIGlzc3VlcyB3aXRoIHRoZSBRUiBDb2RlLCB0aGFua3MgdG8gQGRhbmlvc28gZm9yIHRoZSBzb2x1dGlvblxuICAgICAgICBpZiAoc3dhcCkge1xuICAgICAgICAgIHZhciB0ID0gcHg7XG4gICAgICAgICAgcHggPSBweTtcbiAgICAgICAgICBweSA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChqb2luKSB7XG4gICAgICAgICAgLy9Nb2R1bGUgYXMgYSBwYXJ0IG9mIHN2ZyBwYXRoIGRhdGEsIHRoYW5rcyB0byBAZGFuaW9zb1xuICAgICAgICAgIHZhciB3ID0geHNpemUgKyBweFxuICAgICAgICAgIHZhciBoID0geXNpemUgKyBweVxuXG4gICAgICAgICAgcHggPSAoTnVtYmVyLmlzSW50ZWdlcihweCkpPyBOdW1iZXIocHgpOiBweC50b0ZpeGVkKDIpO1xuICAgICAgICAgIHB5ID0gKE51bWJlci5pc0ludGVnZXIocHkpKT8gTnVtYmVyKHB5KTogcHkudG9GaXhlZCgyKTtcbiAgICAgICAgICB3ID0gKE51bWJlci5pc0ludGVnZXIodykpPyBOdW1iZXIodyk6IHcudG9GaXhlZCgyKTtcbiAgICAgICAgICBoID0gKE51bWJlci5pc0ludGVnZXIoaCkpPyBOdW1iZXIoaCk6IGgudG9GaXhlZCgyKTtcblxuICAgICAgICAgIHBhdGhkYXRhICs9ICgnTScgKyBweCArICcsJyArIHB5ICsgJyBWJyArIGggKyAnIEgnICsgdyArICcgVicgKyBweSArICcgSCcgKyBweCArICcgWiAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmVkZWZpbmVkKSB7XG4gICAgICAgICAgLy9Nb2R1bGUgYXMgYSBwcmVkZWZpbmVkIHNoYXBlLCB0aGFua3MgdG8gQGtrb2Nka29cbiAgICAgICAgICBtb2RyZWN0ICs9IGluZGVudCArICc8dXNlIHg9XCInICsgcHgudG9TdHJpbmcoKSArICdcIiB5PVwiJyArIHB5LnRvU3RyaW5nKCkgKyAnXCIgaHJlZj1cIiNxcm1vZHVsZVwiIC8+JyArIEVPTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL01vZHVsZSBhcyByZWN0YW5nbGUgZWxlbWVudFxuICAgICAgICAgIG1vZHJlY3QgKz0gaW5kZW50ICsgJzxyZWN0IHg9XCInICsgcHgudG9TdHJpbmcoKSArICdcIiB5PVwiJyArIHB5LnRvU3RyaW5nKCkgKyAnXCIgd2lkdGg9XCInICsgeHNpemUgKyAnXCIgaGVpZ2h0PVwiJyArIHlzaXplICsgJ1wiIHN0eWxlPVwiZmlsbDonICsgb3B0aW9ucy5jb2xvciArICc7c2hhcGUtcmVuZGVyaW5nOmNyaXNwRWRnZXM7XCIvPicgKyBFT0w7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGlmIChqb2luKSB7XG4gICAgbW9kcmVjdCA9IGluZGVudCArICc8cGF0aCB4PVwiMFwiIHk9XCIwXCIgc3R5bGU9XCJmaWxsOicgKyBvcHRpb25zLmNvbG9yICsgJztzaGFwZS1yZW5kZXJpbmc6Y3Jpc3BFZGdlcztcIiBkPVwiJyArIHBhdGhkYXRhICsgJ1wiIC8+JztcbiAgfVxuXG4gIHZhciBzdmcgPSBcIlwiO1xuICBzd2l0Y2ggKG9wdC5jb250YWluZXIpIHtcbiAgICAvL1dyYXBwZWQgaW4gU1ZHIGRvY3VtZW50XG4gICAgY2FzZSBcInN2Z1wiOlxuICAgICAgaWYgKHhtbERlY2xhcmF0aW9uKSB7XG4gICAgICAgIHN2ZyArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+JyArIEVPTDtcbiAgICAgIH1cbiAgICAgIHN2ZyArPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgKyAnXCI+JyArIEVPTDtcbiAgICAgIHN2ZyArPSBkZWZzICsgYmdyZWN0ICsgbW9kcmVjdDtcbiAgICAgIHN2ZyArPSAnPC9zdmc+JztcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgLy9WaWV3Ym94IGZvciByZXNwb25zaXZlIHVzZSBpbiBhIGJyb3dzZXIsIHRoYW5rcyB0byBAZGFuaW9zb1xuICAgIGNhc2UgXCJzdmctdmlld2JveFwiOlxuICAgICAgaWYgKHhtbERlY2xhcmF0aW9uKSB7XG4gICAgICAgIHN2ZyArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+JyArIEVPTDtcbiAgICAgIH1cbiAgICAgIHN2ZyArPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0ICsgJ1wiPicgKyBFT0w7XG4gICAgICBzdmcgKz0gZGVmcyArIGJncmVjdCArIG1vZHJlY3Q7XG4gICAgICBzdmcgKz0gJzwvc3ZnPic7XG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIFxuICAgIC8vV3JhcHBlZCBpbiBncm91cCBlbGVtZW50ICAgIFxuICAgIGNhc2UgXCJnXCI6XG4gICAgICBzdmcgKz0gJzxnIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgKyAnXCI+JyArIEVPTDtcbiAgICAgIHN2ZyArPSBkZWZzICsgYmdyZWN0ICsgbW9kcmVjdDtcbiAgICAgIHN2ZyArPSAnPC9nPic7XG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIC8vV2l0aG91dCBhIGNvbnRhaW5lclxuICAgIGRlZmF1bHQ6XG4gICAgICBzdmcgKz0gKGRlZnMgKyBiZ3JlY3QgKyBtb2RyZWN0KS5yZXBsYWNlKC9eXFxzKy8sIFwiXCIpOyAvL0NsZWFyIGluZGVudHMgb24gZWFjaCBsaW5lXG4gICAgICBicmVhaztcbiAgfVxuICBcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKiBXcml0ZXMgUVIgQ29kZSBpbWFnZSB0byBhIGZpbGUgKi9cblFSQ29kZS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKGZpbGUsIGNhbGxiYWNrKSB7XG4gIHZhciBkYXRhID0gdGhpcy5zdmcoKTtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKGVycm9yLCByZXN1bHQpIHsgfTtcbiAgfVxuICB0cnkge1xuICAgIC8vUGFja2FnZSAnZnMnIGlzIGF2YWlsYWJsZSBpbiBub2RlLmpzIGJ1dCBub3QgaW4gYSB3ZWIgYnJvd3NlclxuICAgIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgZnMud3JpdGVGaWxlKGZpbGUsIGRhdGEsIGNhbGxiYWNrKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIC8vU29ycnksICdmcycgaXMgbm90IGF2YWlsYWJsZVxuICAgIGNhbGxiYWNrKGUpO1xuICB9XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gUVJDb2RlO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQUE7QUFBQTtBQTZCQSxhQUFTLFdBQVcsTUFBTTtBQUN4QixXQUFLLE9BQU8sT0FBTztBQUNuQixXQUFLLE9BQU87QUFDWixXQUFLLGFBQWEsQ0FBQztBQUduQixlQUFTQSxLQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssUUFBUUEsS0FBSSxHQUFHQSxNQUFLO0FBQ2hELFlBQUksWUFBWSxDQUFDO0FBQ2pCLFlBQUksT0FBTyxLQUFLLEtBQUssV0FBV0EsRUFBQztBQUVqQyxZQUFJLE9BQU8sT0FBUztBQUNsQixvQkFBVSxDQUFDLElBQUksT0FBUyxPQUFPLGFBQWM7QUFDN0Msb0JBQVUsQ0FBQyxJQUFJLE9BQVMsT0FBTyxZQUFhO0FBQzVDLG9CQUFVLENBQUMsSUFBSSxPQUFTLE9BQU8sVUFBVztBQUMxQyxvQkFBVSxDQUFDLElBQUksTUFBUSxPQUFPO0FBQUEsUUFDaEMsV0FBVyxPQUFPLE1BQU87QUFDdkIsb0JBQVUsQ0FBQyxJQUFJLE9BQVMsT0FBTyxXQUFZO0FBQzNDLG9CQUFVLENBQUMsSUFBSSxPQUFTLE9BQU8sVUFBVztBQUMxQyxvQkFBVSxDQUFDLElBQUksTUFBUSxPQUFPO0FBQUEsUUFDaEMsV0FBVyxPQUFPLEtBQU07QUFDdEIsb0JBQVUsQ0FBQyxJQUFJLE9BQVMsT0FBTyxVQUFXO0FBQzFDLG9CQUFVLENBQUMsSUFBSSxNQUFRLE9BQU87QUFBQSxRQUNoQyxPQUFPO0FBQ0ws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VyxHQUFFLFlBQVcsR0FBRSxZQUFXLEdBQUUsWUFBVyxHQUFFLFlBQVcsR0FBRSxZQUFXLEVBQUM7QUFBRSxRQUFJLFNBQU8sRUFBQyx3QkFBdUIsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsS0FBSSxLQUFJLEdBQUcsQ0FBQyxHQUFFLEtBQUssS0FBRyxLQUFLLEtBQUcsSUFBSSxLQUFHLElBQUksS0FBRyxJQUFJLEtBQUcsSUFBSSxLQUFHLElBQUksS0FBRyxHQUFHLEtBQUssS0FBRyxLQUFLLEtBQUcsS0FBSyxLQUFHLEtBQUssS0FBRyxJQUFJLEtBQUcsSUFBSSxLQUFHLElBQUksS0FBRyxJQUFJLEtBQUcsR0FBRyxVQUFVLEtBQUcsS0FBSyxLQUFHLEtBQUssS0FBRyxLQUFLLEtBQUcsSUFBSSxLQUFHLEdBQUcsZ0JBQWUsU0FBUyxNQUFLO0FBQUMsVUFBSSxJQUFFLFFBQU07QUFBRyxhQUFNLE9BQU8sWUFBWSxDQUFDLElBQUUsT0FBTyxZQUFZLE9BQU8sR0FBRyxLQUFHLEdBQUU7QUFBQyxhQUFJLE9BQU8sT0FBTSxPQUFPLFlBQVksQ0FBQyxJQUFFLE9BQU8sWUFBWSxPQUFPLEdBQUc7QUFBQSxNQUFJO0FBQzN1QyxjQUFRLFFBQU0sS0FBSSxLQUFHLE9BQU87QUFB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TUFBTSxLQUFLLFVBQVUsQ0FBQztBQUFFLGVBQVFBLEtBQUUsR0FBRUEsS0FBRSxLQUFLLFVBQVUsR0FBRUEsTUFBSTtBQUFDLFlBQUlBLEVBQUMsSUFBRSxLQUFLLElBQUlBLEVBQUM7QUFBQSxNQUFFO0FBQ3BKLGVBQVFBLEtBQUUsR0FBRUEsS0FBRSxFQUFFLFVBQVUsR0FBRUEsTUFBSTtBQUFDLFlBQUlBLEVBQUMsS0FBRyxPQUFPLEtBQUssT0FBTyxLQUFLLEVBQUUsSUFBSUEsRUFBQyxDQUFDLElBQUUsS0FBSztBQUFBLE1BQUU7QUFDbEYsYUFBTyxJQUFJLGFBQWEsS0FBSSxDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFBRSxFQUFDO0FBQUUsYUFBUyxVQUFVLFlBQVcsV0FBVTtBQUFDLFdBQUssYUFBVztBQUFXLFdBQUssWUFBVTtBQUFBLElBQVU7QUFDdEksY0FBVSxpQkFBZSxDQUFDLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLENBQUMsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksSUFBRyxHQUFFLEtBQUksRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksSUFBRyxHQUFFLEtBQUksRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLElBQUcsR0FBRSxLQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEtBQUksSUFBRyxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxJQUFHLEtBQUksR0FBRyxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsS0FBSSxLQUFJLEdBQUUsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksS0FBSSxJQUFHLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxLQUFJLElBQUcsS0FBSSxHQUFHLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLEtBQUksS0FBSSxHQUFFLEtBQUksR0FBRyxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEVBQUUsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxLQUFJLEtBQUksR0FBRSxLQUFJLEdBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsQ0FBQztBQUFFLGNBQVUsY0FBWSxTQUFTLFlBQVcsbUJBQWtCO0FBQUMsVUFBSSxVQUFRLFVBQVUsZ0JBQWdCLFlBQVcsaUJBQWlCO0FBQUUsVUFBRyxXQUFTLFFBQVU7QUFBQyxjQUFNLElBQUksTUFBTSwrQkFBNkIsYUFBVyx3QkFBc0IsaUJBQWlCO0FBQUEsTUFBRTtBQUN2akcsVUFBSSxTQUFPLFFBQVEsU0FBTztBQUFFLFVBQUksT0FBSyxDQUFDO0FBQUUsZUFBUUEsS0FBRSxHQUFFQSxLQUFFLFFBQU9BLE1BQUk7QUFBQyxZQUFJLFFBQU0sUUFBUUEsS0FBRSxJQUFFLENBQUM7QUFBRSxZQUFJLGFBQVcsUUFBUUEsS0FBRSxJQUFFLENBQUM7QUFBRSxZQUFJLFlBQVUsUUFBUUEsS0FBRSxJQUFFLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsSUFBRSxPQUFNLEtBQUk7QUFBQyxlQUFLLEtBQUssSUFBSSxVQUFVLFlBQVcsU0FBUyxDQUFDO0FBQUEsUUFBRTtBQUFBLE1BQUM7QUFDL04sYUFBTztBQUFBLElBQUs7QUFBRSxjQUFVLGtCQUFnQixTQUFTLFlBQVcsbUJBQWtCO0FBQUMsY0FBTyxtQkFBa0I7QUFBQSxRQUFDLEtBQUssb0JBQW9CO0FBQUUsaUJBQU8sVUFBVSxnQkFBZ0IsYUFBVyxLQUFHLElBQUUsQ0FBQztBQUFBLFFBQUUsS0FBSyxvQkFBb0I7QUFBRSxpQkFBTyxVQUFVLGdCQUFnQixhQUFXLEtBQUcsSUFBRSxDQUFDO0FBQUEsUUFBRSxLQUFLLG9CQUFvQjtBQUFFLGlCQUFPLFVBQVUsZ0JBQWdCLGFBQVcsS0FBRyxJQUFFLENBQUM7QUFBQSxRQUFFLEtBQUssb0JBQW9CO0FBQUUsaUJBQU8sVUFBVSxnQkFBZ0IsYUFBVyxLQUFHLElBQUUsQ0FBQztBQUFBLFFBQUU7QUFBUSxpQkFBTztBQUFBLE1BQVU7QUFBQSxJQUFDO0FBQUUsYUFBUyxjQUFhO0FBQUMsV0FBSyxTQUFPLENBQUM7QUFBRSxXQUFLLFNBQU87QUFBQSxJQUFFO0FBQ3JmLGdCQUFZLFlBQVUsRUFBQyxLQUFJLFNBQVMsT0FBTTtBQUFDLFVBQUksV0FBUyxLQUFLLE1BQU0sUUFBTSxDQUFDO0FBQUUsY0FBUSxLQUFLLE9BQU8sUUFBUSxNQUFLLElBQUUsUUFBTSxJQUFJLE1BQUk7QUFBQSxJQUFFLEdBQUUsS0FBSSxTQUFTLEtBQUksUUFBTztBQUFDLGVBQVFBLEtBQUUsR0FBRUEsS0FBRSxRQUFPQSxNQUFJO0FBQUMsYUFBSyxRQUFTLFFBQU8sU0FBT0EsS0FBRSxJQUFJLE1BQUksQ0FBQztBQUFBLE1BQUU7QUFBQSxJQUFDLEdBQUUsaUJBQWdCLFdBQVU7QUFBQyxhQUFPLEtBQUs7QUFBQSxJQUFPLEdBQUUsUUFBTyxTQUFTLEtBQUk7QUFBQyxVQUFJLFdBQVMsS0FBSyxNQUFNLEtBQUssU0FBTyxDQUFDO0FBQUUsVUFBRyxLQUFLLE9BQU8sVUFBUSxVQUFTO0FBQUMsYUFBSyxPQUFPLEtBQUssQ0FBQztBQUFBLE1BQUU7QUFDalksVUFBRyxLQUFJO0FBQUMsYUFBSyxPQUFPLFFBQVEsS0FBSSxRQUFRLEtBQUssU0FBTztBQUFBLE1BQUk7QUFDeEQsV0FBSztBQUFBLElBQVMsRUFBQztBQUFFLFFBQUksb0JBQWtCLENBQUMsQ0FBQyxJQUFHLElBQUcsSUFBRyxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxLQUFJLElBQUcsSUFBRyxFQUFFLEdBQUUsQ0FBQyxLQUFJLEtBQUksSUFBRyxFQUFFLEdBQUUsQ0FBQyxLQUFJLEtBQUksSUFBRyxFQUFFLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxFQUFFLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxFQUFFLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLEtBQUksS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssS0FBSSxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLE1BQUssTUFBSyxJQUFJLENBQUM7QUFJOXdCLGFBQVMsT0FBTyxTQUFTO0FBQ3ZCLFVBQUksV0FBVztBQUdmLFdBQUssVUFBVTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFFB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
