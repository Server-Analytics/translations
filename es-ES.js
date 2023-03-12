/**
 * Ce fichier à été généré pour la dernière fois le 18/05/2022 à 23:57:25 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.1 - Version du générateur
 * @language es-ES
 * @default fr-FR
 */

module.exports = {
    infos: {
        public: true,
        language_code: "es-ES",
        language_name: "Español",
        language_flag: "🇪🇸",
        default: false
    },
    general: {
        months_list: {
            "1": [
                "enero"
            ],
            "2": [
                "febrero"
            ],
            "3": [
                "marzo"
            ],
            "4": [
                "abril"
            ],
            "5": [
                "mayo"
            ],
            "6": [
                "junio"
            ],
            "7": [
                "julio"
            ],
            "8": [
                "agosto"
            ],
            "9": [
                "septiembre"
            ],
            "10": [
                "octubre"
            ],
            "11": [
                "noviembre"
            ],
            "12": [
                "diciembre"
            ]
        },
        week_days_list: {
            "0": [
                "domingo",
                "dom"
            ],
            "1": [
                "lunes",
                "lun"
            ],
            "2": [
                "martes",
                "mar"
            ],
            "3": [
                "miércoles",
                "mié"
            ],
            "4": [
                "jueves",
                "jue"
            ],
            "5": [
                "viernes",
                "vie"
            ],
            "6": [
                "sábado",
                "sáb"
            ]
        },
        time_formats: {
            "STANDARD SLASH + YEAR": "{DAY}/{MONTH}/{YEAR}",
            "STANDARD SLASH + YEAR HH:SS": "{DAY}/{MONTH}/{YEAR} à {HOUR}h{MINUTE}",
            "STANDARD FILE DATE": "{DAY}_{MONTH}_{YEAR}",
            "DD MONTH around HH": "{DAY} {MONTH} vers {HOUR}h",
            "DD MONTH at HH": "{DAY} {MONTH} à {HOUR}h",
            "DD MONTH": "{DAY} {MONTH}"
        },
        time_names: {
            days: [
                " día",
                " días",
                "d"
            ],
            hours: [
                " hora",
                " horas",
                "h"
            ],
            minutes: [
                " minutos",
                " minuto",
                " min"
            ],
            seconds: [
                " segundo",
                " segundos",
                "s"
            ],
            weeks: [
                " semana",
                " semanas",
                " sem"
            ],
            months: [
                " mes",
                " meses",
                "m"
            ],
            years: [
                " año",
                " años",
                "a"
            ]
        },
        errors: {
            bot_missing_permissions: "**¡Whoops!** No tengo los permisos suficientes para ejecutar este comando.\n> Necesito : {missingPermissions}",
            cmd_missing_permissions: "**¡Whoops!** Usted no tiene los permisos necesarios para ejecutar este comando.\n> Il te falta : {missingPermissions}",
            bot_unusable: "**¡Bot en mantenimiento!** {selfName} no está disponible en este momento. *Por favor, inténtelo de nuevo más tarde.*"
        },
        common: {
            go_back: "Retour",
            cancel: "Annuler",
            confirm: "Confirmer",
            retry: "Réessayer",
            get_premium: "Devenir Premium"
        },
        timerange_modal: {
            title: "Choisir un intervalle de temps",
            label: "Intervalle temporel (en jours) :",
            error_title: "Whoops !",
            error_not_number: "Vous n'avez pas entré un nombre valide.. *Exemple : `7`, `12`, `30`, etc.*",
            error_too_short: "L'intervalle temporel entré est trop court, *il doit être d'au moins `une semaine` !*",
            error_not_premium: "Pour accéder à vos statistiques au delà de `31` jours, vous devez être **premium**. *Utilisez la commande `/subscribe` pour en savoir plus !*",
            error_button_retry: "Réessayer"
        }
    },
    help: {
        help_screen: {
            title: "Página de ayuda",
            description: "Gracias por usar **{projectName}** v.**{version}** ! *Puede consultar las últimas notas del parche haciendo clic [**aquí**]({lastPatchNoteLink}).*",
            fallback_message: "Esta categoría está vacía :(",
            buttons: {
                website: "Sitio web",
                support_server: "Servidor de Soporte",
                invite_bot: "Invitar al bot"
            },
            categories: {
                STATS: "Comandos estadísticos",
                SECONDARY_STATS: "Comandos secundarios",
                OTHER: "Otros comandos"
            },
            premium_expires_in: "***Le premium** du serveur expire dans {days} jours.*"
        },
        commands: {
            graph: {
                short_description: "Generar un gráfico"
            },
            top: {
                short_description: "Mostrar las clasificaciones del servidor"
            },
            me: {
                short_description: "Mostrar sus estadísticas personales"
            },
            sync: {
                short_description: "Sincronización estadística"
            },
            rawstats: {
                short_description: "Estado de los módulos y del caché"
            },
            botstats: {
                short_description: "Estadísticas e información sobre el bot"
            },
            lang: {
                short_description: "Change preferred language"
            },
            stats: {
                short_description: "Mostrar sus estadísticas generales"
            },
            subscribe: {
                short_description: "Abonnement premium"
            },
            counters: {
                short_description: "Gérer les compteurs du serveur"
            }
        }
    },
    graph: {
        errors: {
            fetch_error: "**¡Whoops!** No se pueden recuperar los datos necesarios para crear un gráfico.. *Si el problema persiste, por favor informe del error en el servidor de soporte.*"
        },
        help_screen: {
            embed_title: "Crear un gráfico",
            embed_description: "**Represente** sus estadísticas o las del servidor en forma de gráficos. Empiece por elegir una **preconfiguración** :",
            image_title: "Gráficos",
            embed_field_server_graph: "Gráficos del servidor",
            embed_field_user_graph: "Gráfico de sus estadísticas",
            components_guild_graph_select_menu: "📊 Gráfico sobre las estadísticas del servidor",
            components_user_graph_select_menu: "👤 Gráfico con sus estadísticas"
        },
        graph_main_screen: {
            advanced: {
                confirm_button: "Generar",
                advanced_button: "Opciones avanzadas",
                advanced_embed_description: "**Ajuste** y **personaliza** la interpretación y visualización de tus gráficos.",
                advanced_embed_options_field_title: "Opciones disponibles: ",
                advanced_options: {
                    display_bar_chart: "Visualización en barras",
                    increment_stats: "Suma acumulativa",
                    remove_inexistant_reports: "Eliminación de informes inexistentes",
                    display_ticks: "Affichage de los puntos",
                    group_values: "Agrupación estadística"
                },
                timerange_select_menu: {
                    placeholder: "Seleccionar un intervalo de tiempo..",
                    option_title: "Visualización en {timeRange}",
                    premium_only_description: "Premium solamente"
                }
            },
            export: {
                export_button: "Exportar",
                export_done: "**¡Gráfico exportado!** Usted puede abrir el archivo `.csv` con su software de hojas de cálculo preferido.",
                export_software_import_tip: "Durante la importación, le recomendamos que siga la **configuración recomendada** para evitar problemas de interpretación:",
                export_config: [
                    [
                        "Juegos de caracteres",
                        "UTF-8 / Unicode (UTF-8)"
                    ],
                    [
                        "Separador de columnas",
                        "Coma (,)"
                    ],
                    [
                        "Separador de líneas",
                        "Vuelta a la línea (\\n)"
                    ]
                ]
            }
        },
        graph_types: {
            server_messages: {
                title: "Mensajes enviados",
                description: "Gráfico resumiendo la actividad del servidor por mensajes.",
                graph_name: "Resumen de actividad por mensaje"
            },
            server_voicetime: {
                title: "Tiempo de voz",
                description: "Gráfico resumiendo la actividad de voz del servidor.",
                graph_name: "Resumen de la actividad vocal"
            },
            server_members: {
                title: "Miembros",
                description: "Gráfico resumiendo el número de miembros del servidor.",
                graph_name: "Resumen de la evolución del número de miembros"
            },
            server_deleted: {
                title: "Mensajes Eliminados",
                description: "Gráfico resumiendo la cantidad de mensajes eliminados.",
                graph_name: "Resumen del número de mensajes eliminados"
            },
            server_reactions: {
                title: "Reacciones",
                description: "Resumen de la actividad de reacciones a los mensajes.",
                graph_name: "Resumen del número de reacciones"
            },
            server_joined: {
                title: "Nuevos miembros",
                description: "Gráfico resumiendo el número de nuevos miembros.",
                graph_name: "Resumen del número de nuevos miembros"
            },
            server_left: {
                title: "Salidas",
                description: "Gráfico resumiendo el número de miembros que han abandonado.",
                graph_name: "Resumen del número de salidas"
            },
            server_boosts: {
                title: "Mejoras",
                description: "Gráfico resumiendo la cantidad de mejoras.",
                graph_name: "Resumen del número de mejoras"
            },
            user_myMessages: {
                title: "Mensajes Enviados",
                description: "Gráfico resumiendo su actividad por mensajes.",
                graph_name: "Resumen de la actividad por mensajes"
            },
            user_myVoicetime: {
                title: "Tiempo en voz",
                description: "Gráfico resumiendo su actividad en voz.",
                graph_name: "Resumen de la actividad en voz"
            },
            user_myReactedCount: {
                title: "Reacciones dadas",
                description: "Gráfico resumiendo el número de reacciones dadas.",
                graph_name: "Resumen del número de reacciones dadas."
            },
            user_myDeletedMessages: {
                title: "Mensajes eliminados",
                description: "Gráfico resumiendo la cantidad de mensajes eliminados.",
                graph_name: "Resumen del número de mensajes eliminados"
            }
        }
    },
    stats: {
        errors: {
            fetch_error: "**¡Whoops!** No se pudieron recuperar los datos necesarios para ver las estadísticas.. *Si el problema persiste, por favor informe del error en el servidor de soporte.*"
        },
        help_screen: {
            embed_title: "Afficher une statistique",
            embed_description: "**Représentez** vos statistiques ou celles du serveur. Commencez par choisir une **préconfiguration** :",
            image_title: "Statistiques",
            embed_field_server_stats: "Statistiques du serveur",
            embed_field_user_stats: "Vos statistiques",
            components_guild_stat_select_menu: "📊 Statistiques du serveur",
            components_user_stat_select_menu: "👤 Vos statistiques"
        },
        timerange_modal: {
            title: "Choisir un intervalle de temps",
            label: "Intervalle temporel (en jours) :",
            error_title: "Whoops !",
            error_not_number: "Vous n'avez pas entré un nombre valide.. *Exemple : `7`, `12`, `30`, etc.*",
            error_too_short: "L'intervalle temporel entré est trop court, *il doit être d'au moins `une semaine` !*",
            error_not_premium: "Pour accéder à vos statistiques au delà de `31` jours, vous devez être *premium*.",
            button_retry: "Réessayer"
        },
        stat_view: {
            general: {
                text_x_days: "{days} jours",
                last_x_days: "Ces derniers {days} jours"
            },
            graph: {
                infoboxes: {
                    per_day: "/j",
                    today_title: "Ces dernières 24 heures",
                    evolution_title: "Evolution",
                    average_title: "En moyenne",
                    max_title: "Valeur maximum",
                    min_title: "Valeur minimum"
                }
            }
        },
        stats_types: {
            server_messages: {
                title: "Messages envoyés",
                description: "Messages envoyés sur ce serveur.",
                view_name: "Activité par messages"
            },
            server_voicetime: {
                title: "Temps passé en vocal",
                description: "Activité vocale du serveur.",
                view_name: "Activité vocale"
            },
            server_members: {
                title: "Membres",
                description: "Nombre de membres sur ce serveur.",
                view_name: "Évolution du nombre de membres"
            },
            server_deleted: {
                title: "Messages supprimés",
                description: "Messages supprimés sur ce serveur.",
                view_name: "Messages supprimés"
            },
            server_reactions: {
                title: "Réactions",
                description: "Réactions aux messages du serveur.",
                view_name: "Réactions aux messages"
            },
            server_joined: {
                title: "Nouveaux membres",
                description: "Nouveaux membres sur ce serveur.",
                view_name: "Nouveaux arrivants"
            },
            server_left: {
                title: "Départs",
                description: "Membres ayant quittés ce serveur.",
                view_name: "Nombre de départs"
            },
            server_boosts: {
                title: "Boosts",
                description: "Boosts du serveur.",
                view_name: "Boosts du serveur"
            },
            user_myMessages: {
                title: "Messages envoyés",
                description: "Vos messages envoyés sur ce serveur.",
                view_name: "Activté par messages"
            },
            user_myVoicetime: {
                title: "Temps en vocal",
                description: "Votre temps passé en vocal.",
                view_name: "Activité vocale"
            },
            user_myDeletedMessages: {
                title: "Messages supprimés",
                description: "Vos messages supprimés.",
                view_name: "Messages supprimés"
            }
        }
    },
    top: {
        not_enough_data: "**¡Whoops!** Tengo muy pocos datos para establecer clasificaciones por el momento.. *Si el problema persiste, consulte nuestro servidor de soporte.*",
        not_allowed_timerange: "**¡Whoops!** Usted no puede elegir un intervalo de tiempo más largo que **{max}** días.",
        not_allowed_timestamp_low: "**¡Whoops!** No puede elegir un intervalo de tiempo de menos de **{max}** día(s).",
        top_canvas_leaderboard_date: "Clasificaciones globales del {date}",
        top_canvas_leaderboard_temp_date: "Clasificaciones {type} del {date1} al {date2}",
        top_canvas_empty_username: "Nadie",
        top_canvas_not_found_username: "No encontrado",
        top_canvas_leaderboard_temp_types: {
            "0": "completos",
            "5": "parciales",
            "10": "esquemáticos"
        },
        pos_abbreviations: {
            "1": "pri",
            "2": "seg",
            "3": "ter",
            other: "o"
        },
        stat_units: {
            messages: [
                "Mensajes",
                "mensajes"
            ],
            voice: [
                "Horas de voz",
                "horas de voz"
            ]
        },
        ready_to_use_timeranges: {
            image_title: "Intervalos de tiempo",
            embed_title: "Seleccione un intervalo de tiempo",
            embed_description: "Séleccione un intervalo de tiempo en el que establecer las clasificaciones.",
            embed_data_FULL: "Datos completos",
            embed_data_PARTIAL_5: "Datos parciales",
            embed_data_PARTIAL_10: "Datos esquemáticos",
            embed_data_partial_disclamer: "Para limitar la saturación del bot, algunas clasificaciones son **parciales** o **esquemáticas**, las estadísticas son inexactas pero suficientes para determinar los rangos.",
            embed_data_learn_more: "Saber más",
            components_days_acronym: "d",
            error_premium_restricted: "**Whoops!** Calculer autant de données nous demande beaucoup de ressources. C'est pourquoi les classements temporaires sont limités aux **{max} derniers jours** pour les serveurs non-premium.."
        }
    },
    me: {
        errors: {
            cannot_fetch_user: "**¡Whoops!** No se pudo recuperar la información de este usuario.. ¡Inténtalo de nuevo más tarde!",
            data_flag_fetch_error: "**¡Whoops!** Se produjo un error al recuperar los datos del **DATA_FLAG**: `{flag}`."
        },
        card: {
            header_joined_at: "Unió el",
            header_created_at: "Creado el",
            global_stats_messages: "Mensajes enviados",
            global_stats_voice: "Horas en voz",
            global_stats_voice_minutes: "Minutos en voz",
            global_stats_leaderboard: "En la clasificación",
            buttons_edit: "Modificar",
            units: {
                timeranges: [
                    "28d",
                    "7d",
                    "24h"
                ],
                messages: [
                    "mensaje",
                    "mensajes"
                ],
                voice: [
                    "hora",
                    "horas"
                ],
                reactionsGiven: [
                    "reacción",
                    "reacciones"
                ],
                deletedMessages: [
                    "mensaje",
                    "mensajes"
                ]
            },
            elements: {
                graph: {
                    meta: {
                        title: "Gráfico",
                        description: "Muestra un gráfico."
                    },
                    elements: {
                        messages: {
                            title: "Mensajes enviados",
                            description: "Gráfico de tus mensajes enviados"
                        },
                        voice: {
                            title: "Tiempo en voz",
                            description: "Gráfico sobre tu actividad vocal"
                        },
                        reactionsGiven: {
                            title: "Reacciones dadas",
                            description: "Gráfico sobre tus reacciones dadas"
                        },
                        deletedMessages: {
                            title: "Mensajes eliminados",
                            description: "Gráfico de tus mensajes eliminados"
                        }
                    }
                },
                percentage: {
                    meta: {
                        title: "Pourcentage",
                        description: "Affiche un pourcentage + barre de progression."
                    },
                    elements: {
                        involvement: {
                            title: "Engagement",
                            text: "Taux de présence sur le serveur/au cours du mois dernier.",
                            description: "Présence en % sur ce serveur"
                        },
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Progression pour devenir #1 du/serveur en terme de messages.",
                            description: "Progression pour devenir #1 du serveur"
                        },
                        nextPlaceMessages: {
                            title: "Progression classement",
                            text: "Progression pour atteindre le/rang #{x} en messages.",
                            description: "Progression dans le classement"
                        }
                    }
                },
                timeranges: {
                    meta: {
                        title: "Statistiques temporelles",
                        description: "Affiche une données sous 3 plages temporelles."
                    },
                    elements: {
                        messages: {
                            title: "Messages envoyés",
                            description: "Statistiques sur vos messages envoyés."
                        },
                        voice: {
                            title: "Temps en vocal",
                            description: "Statistiques sur votre activité vocale."
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Statistiques sur vos réactions données."
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Statistiques sur vos messages supprimés."
                        }
                    }
                },
                numeric: {
                    meta: {
                        title: "Valeur numérique",
                        description: "Affiche un nombre accompagné de texte."
                    },
                    elements: {
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Messages restants avant/d'atteindre le rang #1",
                            description: "Messages restants avant de devenir #1 du serveur"
                        },
                        nextPlaceMessages: {
                            title: "Progression classement",
                            text: "Messages restants avant/d'atteindre le rang #{x]",
                            description: "Messages avant le prochain rang du classement"
                        },
                        daysSinceAccJoin: {
                            title: "Jours depuis l'arrivée",
                            text: "Jours depuis votre/arrivée sur le serveur",
                            description: "Nombre de jours depuis votre arrivée sur ce serveur"
                        },
                        daysSinceAccCreation: {
                            title: "Jours depuis la création",
                            text: "Jours depuis la création/de votre compte",
                            description: "Nombre de jours depuis la création de votre compte"
                        }
                    }
                },
                correlogram: {
                    meta: {
                        title: "Corrélogramme",
                        description: "Affiche un corrélogramme."
                    },
                    elements: {
                        messages: {
                            title: "Messages envoyés",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        voice: {
                            title: "Activité vocale",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Intensité de l'activité en fonction de la date"
                        }
                    }
                },
                ranks: {
                    meta: {
                        title: "Rangs",
                        description: "Evaluation notée de F à A+."
                    },
                    elements: {
                        "messages-voice": {
                            title: "Rangos de actividad",
                            rank_titles: [
                                "Mensajes enviados",
                                "Actividad de voz"
                            ],
                            names: {
                                X: "Ningún dato",
                                F: "Muy poco activo",
                                "F+": "Muy poco activo",
                                "D-": "Poco activo",
                                D: "Poco activo",
                                "D+": "Peu Actif",
                                "C-": "Pasivamente activo",
                                C: "Pasivamente activo",
                                "C+": "Pasivamente activo",
                                "B-": "Casi activo",
                                B: "Casi activo",
                                "B+": "Activo",
                                "A-": "Muy activo",
                                A: "Muy activo",
                                "A+": "Fuerte actividad"
                            }
                        }
                    }
                }
            }
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**Cette statistique est bloquée !** Pour l'utiliser, vous devez l'acheter ! *Pour cela, voici quelques étapes :*\n\n{emoji} **Se connecter au site :**\n> Rendez-vous sur note **[site web]({link})**, puis cliquez sur `Se connecter`, et enfin, rendez-vous dans la **boutique**.\n\n{emoji} **Acheter la statistique :**\n> Une fois dans la boutique /me, sélectionnez l'élément **`{type}`**, puis, à l'étape suivante, achetez la statistique **`{content}`** !\n​",
                SELECTED_LOCKED_CONTENT_IMAGE: "https://i.imgur.com/o4LyrQt.png"
            },
            agreement_message: "**Importante : ** Antes de poder modificar su mapa, debe aceptar que **registremos** sus preferencias. Estos datos serán públicos y **no** serán automáticamente **borrados**.",
            agreement_confirm_button: "Aceptar",
            agreement_reject_button: "Rechazar",
            agreement_reject_message: "**No registraremos sus preferencias.**\n> Si tienes más preguntas sobre cómo manejamos tus **datos**, puedes unirte a nuestro **Servidor de Discord.**. *¡De lo contrario, si cambias de opinión, puedes volver a escribir el comando!*",
            agreement_reject_easteregg_gif: "https://tenor.com/view/dujardin-jean-daccord-comme-ca-gif-10162502",
            main_embed_description: "**Modifica** la disposición de los elementos estadísticos en tu tarjeta. *¡Seleccione un elemento en el menú desplegable para modificarlo!*",
            buttons_save: "Guardar",
            main_embed_fields_name: "Línea {n} :",
            main_embed_select_displayed: "Mostrado :",
            main_embed_select_placeholder: "Seleccionar un elemento",
            select_type_embed_description: "**¡Muy bien!** Seleccione qué tipo de elemento mostrar en la ubicación **#{n}**.",
            select_type_embed_cancelled: "**¡Tiempo agotado!** La selección del elemento ha sido cancelada.",
            select_content_description: "**¡Muy bien!** Elige qué tipo de estadística quieres mostrar en el recuadro `{name}`."
        },
        dummy: {
            box_displayed: "Affiché :",
            card_sub_title: "Carte factice"
        }
    },
    botstats: {
        stat_type_select_placeholder: "Seleccionar una estadística",
        graph_init_at: "Gestor estadístico inicializado hace {x} horas",
        stat_types: {
            commandCount: "Comandos ejecutados",
            interactionCount: "Interacciones recibidas",
            messageCount: "Mensajes registrados",
            cachedGuildCount: "Servidores en caché",
            cachedGuildMemberCount: "Miembros en caché",
            cachedWebsiteUsersCount: "Usuarios en caché",
            ramUsage: "Utilización de RAM",
            databaseConnections: "Consultas a la base de datos",
            newGuilds: "Nouveaux serveurs",
            refreshedCounters: "Compteurs mis à jour"
        },
        at_this_moment: "Cette heure-ci : {x}"
    },
    lang: {
        select_screen: {
            components_lang_select_placeholder: "Sélectionner une langue",
            components_lang_select_no_options_title: "Aucune langue disponible",
            components_lang_select_no_options_description: "Aidez-nous à traduire le bot !",
            custom_display_title: "Langues",
            embed_description: "**Bonjour, hello, holà..** Sélectionnez la langue d'affichage du bot.",
            embed_field_available_languages: "Langues disponibles :",
            embed_field_help_translate_title: "Aider à traduire :",
            embed_field_help_translate_content: "Propulsez le projet en le traduisant dans votre langue ; plus d'informations sur notre [serveur Discord]({link}). Merci !"
        },
        updated_lang_screen: {
            no_available_languages: "**Aucune traduction disponible !** Je n'ai pas encore été traduit.. Mais si tu souhaites remédier à ce problème, rejoins-nous ici : {link} !",
            embed_description: "**Bonjour !** Vos préférences linguistiques ont été mises à jour.",
            embed_description_details: "La langue choisie sera affichée sur tous vos serveurs, et pour vous seul."
        }
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1652911045642,
        last_update_date: "18/05/2022",
        last_update_filegenerator_version: "1.0.1"
    },
    subscribe: {
        subscribe_ad: {
            embed_description: "**Devenez premium !** Et profitez de nombreux avantages tout en supportant un petit projet indépendant =)",
            buy_button: "Souscrire",
            redeem_button: "Utiliser un code",
            redeem_code: {
                modal_title: "Utiliser un code",
                modal_field_code: "Saisissez le code :",
                proc_invalid_code: "**Whoops !** Le code entré est invalide. *Si vous pensez qu'il s'agit d'une erreur, contactez-nous !*",
                proc_expired_code: "**Whoops !** Le code entré est expiré depuis le {date}..",
                proc_easter_egg: "**Bien essayé**, malheureusement : non",
                proc_parse_error: "**Erreur :** Une erreur est survenue lors de la lecture des données associés au code.",
                proc_success: "**Merci,** votre code a été appliqué avec succès ! *L'abonnement premium de ce serveur expirera le {date}.*"
            },
            canvas: {
                title: "Passez à la vitesse suppérieure !",
                support_message: "..et supportez le projet !",
                infoboxes: {
                    premium_title: "Abonnement actif !",
                    premium_content: "Ce serveur est actuellement premium jusqu'au {date} (dans {days} jours). Merci !",
                    deleted_stats_title: "Conservez vos stats",
                    deleted_stats_content: "Annulez la suppression des statistiuques après 31 jours. Ce serveur perd jusqu'à {x} relevés chaque mois !",
                    broader_timeranges_title: "Plages temporelles",
                    broader_timeranges_content: "Visualisez vos stats sur plusieurs mois et années, sans être contraint à 31 jours !",
                    more_counters_title: "Plus de compteurs",
                    more_counters_content: "Affichez plus de stats dans les salons de votre serveur en devenant premium !"
                }
            }
        }
    },
    counters: {
        main_view: {
            buttons_create_counter: "Créer un compteur",
            buttons_edit_counter: "Modifier",
            buttons_delete_counter: "Supprimer",
            embed_description: "**Les compteurs** affichent des statistiques dans les noms et topics de vos salons.",
            embed_description_more_details: "*Plus d'infos et de détails sur notre [`documentation`]({link}) !*",
            embed_counters_title: "Compteurs actifs :",
            embed_no_counters: "*Aucun compteur..* Créez-en un !",
            embed_custom_display_title: "Compteurs",
            max_counters_premium: "**Whoops!** Vous avez atteint la limite de compteurs. Un abonnement **premium** vous permet de repousser la limite jusqu'à **{x}** compteurs !",
            max_counters_reached: "**Whoops!** Vous avez atteint la limite maximale de compteurs sur ce serveur."
        },
        counter_selection_view: {
            selection_menu_placeholder: "Sélectionner un compteur",
            selection_menu_option_title: "Compteur #{n}",
            selection_list_title: "Liste des compteurs: ",
            selection_custom_display_titles: {
                edit: "Modifier un compteur",
                delete: "Supprimer un compteur"
            },
            selection_descriptions: {
                edit: "**Choisissez** le compteur que vous souhaitez modifier.",
                delete: "**Choisissez** le compteur que vous souhaitez supprimer."
            }
        },
        edit_counter_view: {
            embed_description: "**Choisissez** le contenu de votre compteur. Les statistiques marquées d'un {emoji} sont réservées aux serveurs premium.",
            embed_description_example: "[members] 👥    ⇄  182 👥\n[messages] msgs  ⇄  9 854 msgs",
            select_counter_title: "Choisir un compteur pré-fait",
            buttons_custom: "Personnalisé",
            buttons_premium: "Devenir premium",
            default_counters: {
                members: "Membres : [members] 👥",
                voice: "En vocal : [voice] 👥",
                date: "📅 [date]",
                messages: "Messages : [messages] 💬",
                online: "En ligne : [online] 🟢",
                guildAge: "Âge du serveur : [guildAge]",
                inactive: "Inactifs : [inactive] 👥",
                inactiveChunk: "[inactive]/[members] inactifs ([inactiveChunk]%)",
                active: "Membres actifs : [active] 👥",
                boosts: "Boosts : [boosts]",
                boostlvl: "[boosts] boosts • lvl [boostlvl]"
            },
            categories: {
                BASIC: "Essentiel",
                STATS: "Statistiques",
                MISC: "Divers"
            }
        },
        editor_modal: {
            modal_title_new: "Nouveau compteur",
            modal_title_edit: "Modifier un compteur",
            counter_name: "Contenu du compteur :",
            available_stats: "Statistiques disponibles :"
        },
        editor_proc: {
            embed_error_premium: "**Whoops !** Ce compteur contient des statistiques réservées aux serveurs premium. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_outdated: "**Whoops !** Ce compteur contient des statistiques erronées. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_no_tags: "**Whoops !** Ce compteur ne contient aucune statistique valide. *Réessayez en utilisant des tags comme `[members]`, `[messages]`, etc..*",
            buttons_retry: "Réessayer",
            buttons_get_premium: "Devenir premium",
            error_database: "**Une erreur est survenue** lors de l'enregistrement des données.. Nous voilà dans de beaux draps : le compteur créé sera malheureusement supprimé au prochain redémarrage. Merci d'entrer en contact avec le serveur support :/"
        },
        data_tags: {
            members: "Nombre de membres",
            messages: "Nombre de messages",
            voice: "Nombre de membres en vocal",
            date: "Date du jour (DD/MM/YYYY)",
            guildAge: "Âge du serveur",
            online: "Membres en ligne",
            inactive: "Inactifs (aucun message depuis 30j)",
            inactiveChunk: "Pourcentage d'inactifs",
            active: "Membres actifs (30j)",
            boosts: "Nombre de boosts",
            boostlvl: "Niveau de boost"
        }
    }
}
