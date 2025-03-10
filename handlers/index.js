module.exports = {
  handleError: require('./catch'),
  handleStart: require('./start'),
  handleClub: require('./club'),
  handleSticker: require('./sticker'),
  handleDeleteSticker: require('./sticker-delete'),
  handleRestoreSticker: require('./sticker-restore'),
  handlePacks: require('./packs'),
  handleSelectPack: require('./pack-select'),
  handleHidePack: require('./pack-hide'),
  handleRestorePack: require('./pack-restore'),
  handleCopyPack: require('./pack-copy'),
  handleCatalog: require('./catalog'),
  handleLanguage: require('./language'),
  handleEmoji: require('./emoji'),
  handleRoundVideo: require('./video-round'),
  handleStickerUpade: require('./sticker-update'),
  handleInlineQuery: require('./inline-query')
}
