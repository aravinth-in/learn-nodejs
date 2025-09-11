const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aravinth-in:<db_password>@cluster0.6dmr7l7.mongodb.net/mongodb-basics"
  )
  .then(() => console.log("Database is connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// User Model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // Create a new document
    const newUser = await User.create({
      name: "Lido",
      email: "lido@eth.com",
      age: 7,
      isActive: false,
      tags: ["Secure", "Yeild", "Staking"],
    });

    /*
        const newUser = new User({
            name: 'Ethereum',
            email: 'ethereum@eth.com',
            age: 10,
            isActive: true,
            tags: ['World Ledger', 'Stablecoin', 'DeFi'],
        });

        await newUser.save();
        */

    // console.log('newUser:', newUser);

    const getAllUsers = await User.find({});
    console.log("getAllUsers:", getAllUsers);

    const getUserWithActiveFalse = await User.find({ isActive: false });
    console.log("getUserWithActiveFalse:", getUserWithActiveFalse);

    const getUserWithAgeEight = await User.findOne({ age: 8 });
    console.log("getUserWithAgeEight:", getUserWithAgeEight);

    // "-" before _id ensure that id is not included
    const getSelectFields = await User.find().select("name email -_id");
    console.log("getSelectFields:", getSelectFields);

    const getLimitedUser = await User.find().limit(2);
    console.log("getLimitedUser:", getLimitedUser);

    const getSortedUser = await User.find().sort({ age: -1 });
    console.log("getSortedUser:", getSortedUser);

    const getCountDocuments = await User.countDocuments({ isActive: true });
    console.log("getCountDocuments:", getCountDocuments);

    // User.findByIdAndUpdate(id, updateObject, options)
    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 4 },
        $push: { tags: "Updated" },
      },
      { new: true }
    );
    console.log("updateUser:", updateUser);

    const deleteUser = await User.findByIdAndDelete(newUser._id);
    console.log("deleteUser:", deleteUser);
  } catch (e) {
    console.log("Error : ", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
