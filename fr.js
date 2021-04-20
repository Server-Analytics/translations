module.exports = {

    infos: {
        public: true,
        language_code: "fr",
        language_name: "Français",
        language_flag: "🇫🇷"
    },

    general: {
        error_no_stats_title: "Trop peu de données...",
        error_no_stats_content: "Avant de pouvoir afficher et générer des projections, j'ai besoin de **récupérer** suffisamment de données...\n> Temps restant estimé:",
        error_no_stats_image: "https://i.imgur.com/qtkhzMX.png", // Images will be translated later.
        cooldown_long_title: "Vous êtes en cooldown...",
        cooldown_long_content: "Activez le serverPremium** pour permettre à tous les membres du serveur de faire cette commande en illimité !\n\n*L'utilisation d'intelligences artificielles consomme beaucoup de ressources, supportez notre projet en activant le premium !",
        cooldown_long_timer_name: "Temps Restant",
        cooldown_long_timer_content: "Vous pourrez réutiliser la commande dans",
        cooldown_long_shop_name: "Boutique",
        cooldown_long_shop_content: "[` Notre boutique `](https://discordanalytics.fr/client/user?action=shop) *instructions en dessous!*\n[` Serveur Discord `](${clientConnection.config.support.invite}) *giveaways et bonus!*",
        cooldown_long_image: "https://i.imgur.com/pJFcBi8.png",

        months_list: {
            "1": "Janvier",
            "2": "Février",
            "3": "Mars",
            "4": "Avril",
            "5": "Mai",
            "6": "Juin",
            "7": "Juillet",
            "8": "Août",
            "9": "Septembre",
            "10": "Octobre",
            "11": "Novembre",
            "12": "Décembre",
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
    },

    graph: {
        graph_error_no_datas: ""
    },

    set: {
        set_lang_list_title: "Modifier la langue du bot",
        set_lang_list_description: "Modifiez la langue du bot en tapant `${prfx}set lang [langue]`, par exemple `${prfx}set lang en` pour définir la langue du serveur en Anglais.",
        set_lang_error_wrong_countrycode: "La langue entrée n'existe pas ou n'est pas encore disponnible ! Entrées possibles:",
        set_lang_update_embed_title: "Langue du bot modifiée !",
        set_lang_update_embed_content: "Les commandes seront désormais affichées en"
    }
}