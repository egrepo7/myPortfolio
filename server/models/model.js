var userSchema = mongoose.Schema({
  name: { type: String, required: true }
})

mongoose.model('User', userSchema)
