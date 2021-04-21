module.exports = {

    infos: {
        public: true,
        language_code: "fr",
        language_name: "Français",
        language_flag: "🇫🇷"
    },

    general: {
        error_no_stats_short_title: "Merci d'avoir ajouté Server Analytics !",
        error_no_stats_short_content: "Avant de pouvoir vous afficher des statistiques, j'ai besoin de me **configurer** et d'**enregistrer** les données du serveur...\n> Temps restant:",
        error_no_stats_short_image: "https://i.imgur.com/qtkhzMX.png", // Images will be translated later.
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

    set: {
        set_updated_config: "Configuration modifiée",
        set_lang_list_title: "Modifier la langue du bot",
        set_lang_list_description: "Modifiez la langue du bot en tapant `${prfx}set lang [langue]`, par exemple `${prfx}set lang en` pour définir la langue du serveur en Anglais.",
        set_lang_error_wrong_countrycode: "La langue entrée n'existe pas ou n'est pas encore disponnible ! Entrées possibles:",
        set_lang_update_embed_title: "Langue du bot modifiée !",
        set_lang_update_embed_content: "Les commandes seront désormais affichées en",
        set_compare_disabled: "**D'accord!** Il est désormais **impossible** de comparer vos statistiques sur d'autres serveurs. *Retapez la commande pour réactiver la fonctionnalité.*",
        set_compare_enabled: "**D'accord!** Il est à nouveau **possible** de comparer les statistiques de votre serveur. *Retapez la commande pour désactiver la fonctionnalité.*",
        set_help_embed_title: "Configuration de ${botName}",
        set_help_embed_allowCompare: "Autoriser/Refuser d'autres serveurs à comparer vos statistiques",
        set_help_embed_hoverColor: "Changer la couleur du fond au survol du serveur sur notre site web",
        set_help_embed_lang: "Modifier la langue de Server Analytics. (Switch to english)"
    },

    stats: {
        stats_error_compare_not_exist: "L'ID entré n'est pas celui d'un serveur valide où Server Analytics n'est pas dessus...\n> **Comment trouver l'ID ?** https://i.imgur.com/IsSzZ2O.png",
        stats_error_compare_disabled: "Vous essayez de comparer vos statistiques avec un serveur qui n'autorise pas cette fonctionnalité...\n> 💡 **»** *Vous pouvez vous aussi refuser d'être comparé en tapant `${prfx}set allowCompare`.*",
        stats_error_compare_not_member: "Pour des raisons de confidentialité, tu dois être membre du serveur que tu souhaites comparer pour procéder à une comparaison.",
        stats_error_restricted_premium: "Ce tableau statistique est réservé aux serveurs détenant le Server Premium. Pour plus d'infos, tapez ` s.premium `",
        stats_error_restricted_dev: "L'accès à ce tableau statistique a été restreint. Celui-ci est peut-être en maintenance ou en cours de création.. Revenez plus tard !",
        stats_error_no_datas: "Je manque de statistiques ! Laisse-moi juste quelques minutes pour que je commence à relever les statistiques du serveur...",
        stats_error_empty_board: "Le format du tableau statistique est incorrect: Aucune statistique à afficher...",
        stats_error_unknown_method: "La méthode statitique personnalisée entrée sur l'objet n'existe pas, vérifiez la structure du tableau.",
        stats_embed_title: "Tableau Statistique",
        stats_embed_compared_with: "Statistiques comparées avec",
        stats_embed_compare_instr: "Comparez avec un autre serveur",
        stats_embed_content_chart_timerange: "Ces 6 derniers jours",
        stats_embed_content_empty_logs: "Vous n'avez rejoint aucun vocal ces 31 derniers jours.",
        stats_embed_chart_default_name: "Graphique sur les Messages Envoyés",
        stats_embed_footer: "Généré en",
        stats_help_embed_title: "Panneaux Statistiques de ${guildName}",
        stats_help_embed_description: "**Consultez vos statistiques** et celles du serveur à l'aide des panneaux standards et personnalisés.",
        stats_help_embed_field_your_boards: "Vos panneaux statistiques",
        stats_help_embed_field_your_boards_empty: "**Whoops !** Il n'est pas encore possible de créer ses propres tableaux statistiques.. Reviens plus tard !",
        stats_help_embed_footer: "Commande expérimentale",

        // Standard stat board "messages" 
        stats_board_messages_category1: "Messages Envoyés",
        stats_board_messages_category2: "Mentions et Activité",
        stats_board_messages_category3: "Supprimés et moyennes",
        stats_board_messages_category1_subcategory1: "✉ • Messages Envoyés:",
        stats_board_messages_category1_displayedText: "\n> **Vous »**", // You sent » (x messages)
        stats_board_messages_category1_subcategory2: "📊 • Graphique:",
        stats_board_messages_category2_subcategory1: "📌 • Mentions:",
        stats_board_messages_category2_subcategory2: "👥 • Membres Actifs:",
        stats_board_messages_category3_subcategory1: "🗑 • Supprimés:",
        stats_board_messages_category3_subcategory1_unitName: "supprimés",
        stats_board_messages_category3_subcategory2: "📋 • En moyenne:",
        stats_board_messages_category3_subcategory2_displayedText: "> `{%a%}` messages/**mois**\n> `{%b%}` messages/**jour**\n> `{%d%}` messages/**heure**\n> `{%c%}` messages/**membre**",

        // Standard stat board "members"
        stats_board_members_category1: "Nombre de Membres",
        stats_board_members_category2: "Départs et arrivées",
        stats_board_members_category3: "Graphiques",
        stats_board_members_category1_subcategory1: "👥 • Evolution:",
        stats_board_members_category1_subcategory1_displayedText: "> Membres",
        stats_board_members_category1_subcategory1_unitName: "membres",
        stats_board_members_category1_subcategory2: "📋 • En moyenne:",
        stats_board_members_category1_subcategory2_displayedText: "*Nouveaux membres:*\n> `+ {%a%}` membres/**mois**\n> `+ {%b%}` membres/**jour**\n> `+ {%d%}` membres/**heure**",
        stats_board_members_category2_subcategory1: "<:le:807632343497703454> • Arrivés:",
        stats_board_members_category2_subcategory1_unitName: "arrivées",
        stats_board_members_category2_subcategory2: "<:j_:807632343207772190> • Départs:",
        stats_board_members_category2_subcategory2_unitName: "départs",
        stats_board_members_category3_subcategory1: "📈 • Arrivées:",
        stats_board_members_category3_subcategory2: "📉 • Départs:",

        // Standard stat board "voice"
        stats_board_voice_category1: "Statistiques Vocales",
        stats_board_voice_category2: "Vos Statistiques Vocales",
        stats_board_voice_category3: "Sessions Vocales",
        stats_board_voice_category1_subcategory1: "🔊 • Temps en vocal:",
        stats_board_voice_category1_subcategory1_displayText: "\n> **Vous »** ",
        stats_board_voice_category1_subcategory2: "📊 • Graphique:",
        stats_board_voice_category2_subcategory1: "👥 • Temps passé en vocal:",
        stats_board_voice_category2_subcategory2: "📊 • Graphique:",
        stats_board_voice_category3_subcategory1: "📚 • Vos derniers vocaux:",

    },

    invite: {
        invite_message_title: "Ajoutez ${botName}",
        invite_message_add_bot: "Ajouter le bot",
        invite_message_dashboard: "Dashboard",
        invite_message_discord_server: "Serveur Support"
    },

    graph: {
        graph_error_no_datas: "Je n'ai pas assez de statistiques pour créer un graphique... Reviens plus tard :(",
        graph_error_low_timerange: "Il n'est pas encore possible d'afficher des graphiques sur une période inférieure à **6 jours**",
        graph_error_high_timerange: "Il n'est pas encore possible d'afficher des graphiques sur une période suppérieure à **9999 jours**",
        graph_error_premium_timerange: "Seuls les serveurs avec un abonnement premium peuvent afficher des graphiques sur plus de **31 jours**!",
        graph_help_embed_title: "Générer un graphique",
        graph_help_embed_content: "Affichez un graphique sur **${x}** jours:",
        graph_help_embed_available_graphs: "Graphiques disponibles",

        // Do not edit "type", "columnName", "format" and "normalizeFactor" proprieties!
        graph_list: {
            messages: {
                type: "guild",
                graphName: "Graphique sur les Messages Envoyés",
                graphDescription: "Graphique sur les messages envoyés sur ce serveur.",
                columnName: "messages"
            },
            members: {
                type: "guild",
                graphName: "Graphique sur l'évolution du nombre de Membres",
                graphDescription: "Graphique sur l'évolution du nombre de membres dans ce serveur.",
                columnName: "membres",
                processMethod: "set"
            },
            mentions: {
                type: "guild",
                graphName: "Graphique sur le Nombre de Mentions",
                graphDescription: "Graphique sur le nombre de mentions envoyées dans ce serveur.",
                columnName: "mentions"
            },
            myMessages: {
                type: "user",
                graphName: "Graphique du Nombre de Messages",
                graphDescription: "Graphique sur le nombre de messages que vous avez envoyé sur ce serveur.",
                columnName: "messages"
            },
            voiceTime: {
                type: "guild",
                graphName: "Graphique sur le temps passé en vocal",
                graphDescription: "Graphique sur le temps passé en vocal sur ce serveur.",
                columnName: "voice_time",
                format: "time",
                normalizeFactor: 1000
            }
        }
    },

}