module.exports = {
  async index(req, res) {
    let role = await Roles.findAll({
      attributes: ["nombre"],
      include: {
        association: "usuario",
        attributes: ["nombre"],
      },
    });

    res.json(role);
  },
};
