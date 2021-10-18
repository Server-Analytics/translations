module.exports = {

    infos: {
        public: true,
        language_code: "fr",
        language_name: "Français",
        language_flag: "🇫🇷",
        default: true
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
        cooldown_short_displayed_text: "Cooldown!** Tu dois attendre ${cooldownDelay} secondes entre chaque commande !",
        command_maintenance_text: "🚧** • Maintenance »** Server Analytics est en maintenance pour encore ` ${mtnc.duration} `",
        command_maintenance_lagprv_text: "🔥** • Réseau Surchargé »** Server Analytics est actuellement trop utilisé, réessayez dans environ ` ${mtnc.duration} `",
        command_maintenance_text_3: "🏳️** • Traitement des données »** Server Analytics est actuellement en processus **quotidien** de traitement des données, pour éviter une surcharge du réseau et veiller à la continuité de nos services, reviens dans ` ${mtnc.duration} `",
        command_maintenance_details: "Détails:",

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
        },

        time_names: {
            // 0: long singular, 1: long plurial, 2: short
            days: [" jour", " jours", "j"],
            hours: [" heure", " heures", "h"],
            minutes: [" minute", " minutes", " min"],
            seconds: [" seconde", " secondes", "s"]
        }
    },

    help: {
        help_embed_title: "Aide de Server Analytics",
        help_embed_field1_name: "Statistiques du serveur",
        help_embed_field1_content: "`${prfx}stats` - Statistiques détaillées sur le serveur\n> `${prfx}top` - Classements des membres du serveur\n> `${prfx}graph` - Générer un graphique\n> `${prfx}forecast` - Projections\n> `${prfx}trends` - Tendances d'activité du serveur\n> `${prfx}objectives` - Objectifs et records du serveur",
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
        enable_error_not_exist: "La clé d'activation spécifiée n'existe pas ou a déjà été récupérée...",
        enable_error_expired: "La clé d'activation spécifiée a expirée et n'est donc plus valide...",
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
        set_help_embed_lang: "Modifier la langue de Server Analytics. (Switch to english)",
        set_help_embed_reset: "Réinitialiser vos statistiques ou celles du serveur.",

        // Reset stats
        set_reset_embeds_title: "Réinitialisation des statistiques",
        set_reset_select_type_descr: "Avant de commencer, vous devez choisir quelle catégorie de statistiques vous souhaitez supprimer:\n\n> • **Statistiques personnelles:** n'affectera que vos stats, les autres utilisateurs n'auront aucune perte.\n> • **Statistiques du serveur:** affectera les statistiques du serveur et de tous ses membres (dont vous!).",
        set_reset_select_buttons: ["Stats personnelles", "Stats du serveur"],
        set_reset_select_stats_descr: "**Attention !** Cette action est __irréversible__, en conséquent, assurez-vous de bien savoir ce que vous faites !\n\nCependant, si vous êtes persuadés à **110%** de l'action que vous entreprenez, choissisez les **différentes** statistiques à **réinitialiser** dans le menu-déroulant.",
        set_reset_select_stats_placeholder: "Statistiques à réinitialiser..",
        set_reset_recap_desc: "**Récapitulatif:** Vous vous appretez à **supprimer** les données ci-dessous inscrites. **NOTEZ** que les entrées ne sont pas mises à jour, mais complètement **supprimées**; donc irrécupérables!",
        set_reset_recap_confirm: "CONFIRMER",
        set_reset_success_message: "**C'est fait..** Les statistiques entrées devraient être supprimées sous peu.",

        // Reset dropdown options
        set_reset_dropdown_options: {
            members_stats: ["Statistiques des membres", "Statistiques de TOUS les membres du serveur.", ["", "TOUS les membres auront leurs stats à 0!"]],
            global_stats: ["Statistiques globales", "Nombre total de messages, temps total en voc etc..", ["Vous perdrez votre place dans les classements!", "TOUT sera réinitialisé; premium, clés d'activations etc.."]],
            temporal_stats: ["Statistiques temporelles", "Graphiques, statistiques sur N jours."],
            voice_sessions: ["Sessions vocales", "Historique des sessions vocales"],
            temp_leaderboards: ["Classements temporaires", "Classements sur 24h, 7j et 28j."],
            objectives: ["Objectifs", "Objectifs et records du serveur."],
        }
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
        stats_board_members_category2_subcategory1: "<:ji:856170053836734525> • Arrivés:",
        stats_board_members_category2_subcategory1_unitName: "arrivées",
        stats_board_members_category2_subcategory2: "<:li:856170054101106768> • Départs:",
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
        graph_help_embed_interaction_placeholder: "Choisir un graphique à afficher..",

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

    top: {
        top_error_invalid_timerange: "Vous devez spécifier une durée valide, pour le moment les entrées possibles sont: `24h` `7j` et `28j`.",
        top_error_invalid_user_id: "L'`ID` entré n'est pas valide :(\n> **Comment trouver l'ID ?** https://i.imgur.com/IsSzZ2O.png",
        top_error_user_id_not_found: "Impossible de trouver l'utilisateur recherché, réessayez avec un `ID` valide !",
        top_general_message_unitName: "messages",
        top_general_your_rank: "Votre Position:",
        top_category_global_title: "Classements Globaux",
        top_category_messages_name: "Messages envoyés",
        top_category_voice_name: "Temps en vocal",
        top_category_ranks_name: "Positions et progressions",
        top_category_ranks_prtg_top: "Top `${x}%` du serveur", // Top xx.xx% du serveur
        top_category_ranks_messages_until: "messages pour passer", // Messages left until position #x-1
        top_category_ranks_voice_until: "pour passer", // <Time left> until position #x-1
        top_category_ranks_messages_until_alt: "messages avant", // Messages left until position #1
        top_category_ranks_voice_until_alt: "avant", // <Time left> until position #1
        top_category_ranks_user_first: "Vous êtes **1er** du serveur !",
        top_embed_author: "Classements sur", // Leaderboeards for <server name>
        top_embed_description_title: "Classement Global des utilisateurs du serveur.",
        top_embed_description_instructions: "Classements sur **28j**, **7j** et **24h**: ` ${prfx}top [ 28j | 7j | 24h ]`\n> <:ps:856186498377187348> Classements d'un utilisateur: `${prfx}top [ID]`",
        top_embed_description_timerange: "Classement du serveur", // Server leaderboard <these last x days>
        top_embed_description_reset: "Réinitialisé", // Réinitialisé <tous les jours à xx:xx>
        top_embed_description_instructions_user_top: "Classements d'un utilisateur: `${prfx}top [ID]`",
        top_user_top_not_available: "<:ji:856170053836734525> **C'est pas encore disponible!** Concurrences, performances et bien plus arriveront bientôt ! Pour être informé en avance de toutes les nouveautés, rejoins notre Serveur Discord » https://discord.gg/g62eVMr",

        timeranges_names: {
            1: [
                "ces 24 dernières heures",
                "sur 24h",
                "aujourd'hui",
            ],
            7: [
                "ces 7 derniers jours",
                "sur 7j",
                "cette semaine",
            ],
            28: [
                "ces 28 derniers jours",
                "sur 28j",
                "ce mois-ci",
            ],
        }
    },

    me: {
        me_card_header_createdAt: "Inscrit le",
        me_card_header_joinedAt: "Arrivé le",
        me_card_unit_messages: "Messages",
        me_card_unit_in_vc: "En vocal",
        me_card_top_global_unit: "Classement",
        me_card_daily_top_rank_global_unit: "Aujourd'hui",
        me_stat_box_messages_sent: "Messages envoyés",
        me_stat_box_voice_time: "Temps en vocal",
        me_stat_box_mentions: "Mentions",
        me_stat_box_mentionned: "Mentionné",
        me_stats_box_leaderboards: "Classements",
        me_stats_box_ranks: "Ranks d'activité",
        me_stats_box_message_graph: "Graphique",

        me_stats_box_ranksNames: {
            "X": "Aucune donnée",
            "F": "Très peu actif",
            "F+": "Très peu actif",
            "D-": "Peu actif",
            "D": "Peu actif",
            "D+": "Peu actif",
            "C-": "Passivement Actif",
            "C": "Passivement Actif",
            "C+": "Passivement Actif",
            "B-": "Plutôt Actif",
            "B": "Plutôt Actif",
            "B+": "Actif",
            "A-": "Très Actif",
            "A": "Très Actif",
            "A+": "Forte Activité",
        }
    },

    counter: {

        // Errors
        counter_error_bot_permission: "**Permissions insuffisantes!** Le bot ne détiens pas les permissions nécessaires pour **gérer les compteurs**. Requiert `MANAGE_CHANNELS`.",
        counter_error_user_permission: "**Whoops!** Cette commande est réservée aux staffs du serveur.. (requiert `MANAGE_GUILD`).",

        // 'Create your first counter' embed
        counter_help_empty_title: "Créer un compteur statistique",
        counter_help_empty_description: "Ce serveur n'a pas encore configuré de **compteurs**. *Cliquez sur le bouton du dessous pour en créer un.*",
        counter_help_empty_button: "Créer un compteur",
        counter_help_empty_image: "https://i.imgur.com/iAYFGLq.png",
        counter_create_cancel_message: "**Annulé!** La création du compteur à été annulée.",

        // Main embed (counter list)
        counter_list_embed_title: "Compteurs Statistiques",
        counter_list_embed_description: "Pour créer, éditer ou supprimer un counter, utilisez les boutons du dessous.",
        counter_list_embed_field_title: "[{counter} / {max}] Liste des compteurs:",
        counter_list_buttons_delete: "Supprimer",
        counter_list_buttons_edit: "Modifier",

        // Max counter limit has been reached
        counter_max_reached_embed_title: "Limite de compteurs atteinte..",
        counter_max_reached_embed_description: "**Vous avez atteint la limite de compteurs..**\n> • Pour en créer un, supprimez un compteur existant.\n> • Faites devenir votre serveur **premium** pour bénéficier de plus de compteurs et autres avantages !\n> • Rejoignez notre **serveur** et participez à nos giveaways.\n\n<:l_:855936761436176404> **[Cliquez ici pour devenir premium](https://discordanalytics.fr/client/premium.php)**",
        counter_max_reached_embed_image: "https://i.imgur.com/0WzeRWE.png",
        counter_max_reached_embed_button_premium: "Devenir Premium",
        counter_max_reached_embed_button_discord: "Serveur Discord",

        // Counter deleted
        counter_delete_channel_reason: "Suppression du compteur par {user}",
        counter_delete_message: "**C'est fait!** Le/les compteurs sélectionnés ont été supprimés.",

        // Counter edit embed
        counter_edit_embed_title: "Modifier un compteur",
        counter_edit_embed_title_delete: "Supprimer un compteur",
        counter_edit_embed_description: "**Modifiez** un compteur en le séléctionnant dans le **menu-déroulant** du dessous.",
        counter_edit_embed_description_delete: "**Supprimez** un ou plusieurs compteurs en les sélectionnant dans le **menu-déroulant** du dessous.",
        counter_edit_embed_placeholder: "Séléctionnez un compteur",
        counter_edit_embed_select_prefix: "Compteur #",
        counter_edit_embed_select_topic: "Topic de #",
        counter_edit_embed_select_cancel: "Annuler",
        counter_edit_embed_select_cancel_descr: "Sélectionez pour annuler",
        counter_edit_embed_cancel_message: "**Sélection annulée!** Vous pouvez à nouveau utiliser la commande.",

        // Step 1 - Select counter type
        counter_create_step1_title: "Type de compteur",
        counter_create_step1_description: "Choisissez le type de compteur que vous souhaitez créer.",
        counter_create_step1_image: "https://i.imgur.com/qYAOyg4.png",
        counter_create_step1_interaction_placeholder: "Choisir un type de compteur..",
        counter_create_step1_select_title_category: "Choisir une catégorie",
        counter_create_step1_select_title_topic: "Choisir un salon",
        counter_create_step1_select_description_category: "**Entrez** l'identifiant de la catégorie à modifier. *Ecrivez **stop** pour annuler.*",
        counter_create_step1_select_description_topic: "**Mentionnez** le salon sur lequel modifier le topic. *Ecrivez **stop** pour annuler.*",
        counter_create_step1_select_image_category: "https://i.imgur.com/UhWpcGT.png",
        counter_create_step1_select_image_topic: "https://i.imgur.com/CVKaZAS.png",

        // Step 1 - Errors
        counter_create_step1_select_error_notexists_category: "**Erreur!** L'id entré n'appartient à aucune catégorie.. *Assurez-vous de l'avoir correctement copié.*",
        counter_create_step1_select_error_notexists_topic: "**Erreur!** Le salon mentionné n'existe pas ou n'est pas accessible par le bot.. *Assurez-vous de l'avoir correctement mentionné.*",
        counter_create_step1_select_error_notcategory_category: "**Erreur!** L'ID entré n'est pas celui d'une catégorie, mais celui d'un salon vocal/textuel. *Assurez-vous de l'avoir correctement copié.*",
        counter_create_step1_select_error_nottext_topic: "**Erreur!** Le salon mentionné n'est pas textuel. *Assurez-vous de l'avoir correctement mentionné.*",
        counter_command_already_running: "Chaque chose en son temps!** Un autre utilisateur configure déjà un compteur dans ce salon. Demandez-lui d'écrire `stop` ou de terminer son compteur.",

        // Step 1 - Options/Values
        counter_create_step1_options: {
            "voice": ["Salon vocal", "<:vc:891320179533950986>"],
            "category": ["Catégorie", "<:ctg:891320722302062603>"],
            "topic": ["Topic de salon", "<:txt:891320180066635787>"]
        },

        // Step 2 - Counter content/name
        counter_create_step2_title: "Contenu du compteur",
        counter_create_step2_description: "Le contenu est le texte affiché dans le compteur. **Longueur max pour `{type}`: {max} caractères.** *Ecrivez **stop** pour annuler.*",
        counter_create_step2_image: "https://i.imgur.com/LHHs5dn.png",
        counter_create_step2_notag_error: "**Erreur!** La réponse envoyée ne contenait aucun tag statistique. **Renvoyez une réponse valable!** *Ecrivez **stop** pour annuler.*",
        counter_create_step2_notag_image: "https://i.imgur.com/3673sfF.png",
        counter_create_step2_toolong_error: "**Erreur!** Le compteur est trop long, veuillez réessayer en utilisant au maximum **{max}** lettres. *Ecrivez **stop** pour annuler.*",

        // Step 3 - Counter creation finalisation
        counter_create_voice_channel_reason: "Nouveau compteur statistique (demandé par {user})",
        counter_create_text_channel_reason: "Ajout d'un compteur au salon (demandé par {user})",

        // Step 4 - Counter creation success
        counter_create_success_title: "Nouveau compteur créé avec succès",
        counter_create_success_description: "**Compteur créé !** Le compteur `{name}` affichera désormais des statistiques.",
        counter_create_success_image: "https://i.imgur.com/s3UEC3c.png",

        // Step 4 (if counter has been edited) - Counter edit success
        counter_edit_success_title: "Compteur modifié avec succès",
        counter_edit_success_description: "**Compteur modifié !** Le compteur `{name}` à correctement été modifié.",
        counter_edit_success_image: "https://i.imgur.com/6fnlEAp.png",

    },

    objectives: {

        // Main embed
        objectives_main_embed_title: "Objectifs et records",
        objectives_main_embed_description: "Visualisez les **objectifs** et **records** du serveur.\n<:pl:856170070141304832> **Une fois atteints,** les objectifs se mettent à jour **automatiquement**.\n:clock10: *Fuseau Horaire: `{timezone}`*",

        // Main embed, objectives field
        objectives_field_objective_title: "Objectifs",
        objectives_field_objective_prefix: "Objectif:",

        // Objectives field components
        objectives_field_objective_progression: "Progression:",
        objectives_field_objective_last_reached: "**{objective(n-1)}** {unit} atteint le {timestamp[-1]}", // Unit = statistical unit (e.g. messages, members, etc.)
        objectives_field_objective_never_reached: "L'objectif n'a encore jamais été atteint !",

        // Objective list
        objectives_field_objective_list: {
            members: {
                name: "membres",
                emoji: "👥",
            },
            messages: {
                name: "messages",
                emoji: "💬",
            },
        },

        // Main embed, objectives field
        objectives_field_records_title: "Records",
        objectives_field_records_prefix: "Record de {statUnit}", // statUnit = record statistical unit

        // Records field components
        objectives_field_objective_recval: "Record de `{recval}` {statUnit} {timerange}", // recval = record value (e.g. 100 000), timerange = e.g. in 24h, simultaneously, etc.
        objectives_field_objective_timestamp: "Record atteint le {timestamp}", // Timestamp displayed as "16 October 2021" (depending on user locale)
        objectives_field_objective_timestamp_beaten: "**Nouveau record !** Record battu aujourd'hui.",
        objectives_field_objective_timestamp_never_beaten: "Aucun record n'a encore été établi.",

        // Records list
        objectives_field_records_list: {
            members: {
                name: "membres",
                displayed_name: "nouveaux membres",
                emoji: "👥",
                timerange: "en 24h"
            },
            messages: {
                name: "messages",
                displayed_name: "messages",
                emoji: "💬",
                timerange: "en 24h"
            },
            voice: {
                name: "membres en voc",
                displayed_name: "membres en voc",
                emoji: "🔊",
                timerange: "simultanément"
            },
        },
    }
}