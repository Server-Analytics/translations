module.exports = {

    infos: {
        public: true,
        language_code: "fr",
        language_name: "Français",
        language_flag: "🇫🇷"
    },

    general: {
        error_no_stats_title: "Not enough data...",
        error_no_stats_content: "Before displaying and generating projections, I need to **fetch** enough data...\n> Estimated time remaining:",
        error_no_stats_image: "https://i.imgur.com/qtkhzMX.png", // Images will be translated later.
        cooldown_long_title: "You're in cooldown...",
        cooldown_long_content: "**Enabling the ServerPremium** will allow all members to use this command without any limit !\n\n*The use of artificial intelligence consumes a lot of resources, support our project by enabling the premium !",
        cooldown_long_timer_name: "Time Remaining",
        cooldown_long_timer_content: "You can use the command again in",
        cooldown_long_shop_name: "Shop",
        cooldown_long_shop_content: "[` Our shop `](https://discordanalytics.fr/client/user?action=shop) *instructions below!*\n[` Serveur Discord `](${clientConnection.config.support.invite}) *giveaways and bonuses!*",
        cooldown_long_image: "https://i.imgur.com/pJFcBi8.png",

        months_list: {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        }
    },

    help: {
        help_embed_title: "Aide de Server Analytics",
        help_embed_field1_name: "Statistiques du serveur",
        help_embed_field1_content: "`${prfx}stats` - Statistiques détaillées sur le serveur\n> `${prfx}top` - Classements des membres du serveur\n> `${prfx}graph` - Générer un graphique\n> `${prfx}forecast` - Projections\n> `${prfx}trends` - Tendances d'activité du serveur",
        help_embed_field2_name: "Statistiques personnelles",
        help_embed_field2_content: "`${prfx}me` - Voir toutes vos stats sur ce serveur\n> `${prfx}u [@membre]` - Voir toutes les stats d'un membre du serveur",
        help_embed_field3_name: "Autres commandes",
        help_embed_field3_content: "`${prfx}counter` - Créer ou gérer des salons de compteurs\n> `${prfx}invite` - Ajouter le bot sur son serveur\n> `${prfx}set` - Modifier la config de Server Analytics",
        help_embed_field4_name: "Liens importants",
        help_embed_field4_content: "[`Site Web`](https://discordanalytics.fr) • [`Serveur Support`](https://discord.gg/g62eVMr) • [`Ajouter le bot`](https://cutt.ly/regmeY2)",
        help_embed_field4_premium_since: "ServerPremium pour encore",
        help_embed_field4_get_premium: "**» Pas encore premium?** *Tapez s.premium*",
        help_embed_author: "Demandé par"
    },

    enable: {
        enable_error_access: "Whoops!** L'accès à la commande est restreint aux administrateurs et gérants de Server Analytics.",
        enable_error_not_exist: "La clé d'activation spécifiée n'existe pas ou à déjà été récupéré...",
        enable_error_expired: "La clé d'activation spécifiée à expiré et n'est donc plus valide...",
        enable_error_already_claimed: "Ce serveur à déjà activé cette commande ! Utilisez la clé d'activation dans un autre serveur.",
        enable_error_command_not_exist: "On dirait bien que la commande n'existe plus ou est désormais publique ! Pas de chance...",
        enable_list_error_no_key: "Aucune clé d'activation à été activée sur ce serveur...",
        enable_list_embed_description: "Liste des commandes activées par des clés d'activation sur ce serveur",
        enable_list_embed_title: "Commandes activées sur ce serveur",
        enable_list_embed_activated_cmds: "Commandes activées:",
        enable_list_embed_activated_cmds_content: "Ce serveur a **${x}** commandes activées:",
        enable_list_embed_privileges: "Privilèges activés:",
        enable_list_embed_privileges_count: "Ce serveur a **${x}** privilèges activés:",
        enable_list_embed_privileges_empty: "*Aucun privilège de serveur activé*",
        enable_premium_success: "**» C'est fait !** Vous avez activé le **ServerPremium** sur ce serveur jusqu'au",
        enable_premium_success_msg: "*Tous les avantages devraient s'activer dans moins de **240s***",
        enable_premium_success_alt: "**» C'est fait !** Vous avez allongé la durée de votre **ServerPremium** jusqu'au",
        enable_privilege_update: "**» C'est fait !** Les privilèges du serveurs ont bien été mis à jour.",
    },

    forecast: {
        loading_message_prefix: "Chargement",
        loading_message_ai: "Initialisation du modèle et entraînement de l'**IA**. *(Ce processus peut prendre du temps)*",
        loading_messages_maths: "Calcul et génération des prédictions en cours...",
        graph_name_ai_process: "Analyse prédictive par Intelligence Artificielle",
        graph_name_maths_process: "Analyse prédictive par procédé mathématique",
        forecast_help_title: "Projections Statistiques de",
        forecast_help_description: "**Projetez-vous dans le futur** grâce à notre intelligence artificielle et à l'analyse de vos statistiques.",
        forecast_help_cmd_members_maths: "Projections sur l'évolution des membres de votre serveur",
        forecast_help_cmd_members_ai: "**Intelligence Artificielle**\n> *Analyse prédictive par A.I. de l'évolution des membres de votre serveur*\n> ⚠ Lent et très peu précis: non recommandé",
        forecast_help_footer_name: "🧪 • Commande expérimentale"
    }
}
